// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0
// structs need to be in order

/* eslint-disable sort-keys */
import { combineLatest, map } from 'rxjs';
import { bestNumber, bestNumberFinalized, bestNumberLag, getBlock, subscribeNewBlocks } from '@polkadot/api-derive/chain';
import { memo } from '@polkadot/api-derive/util';

function extractAuthor(digest, api) {
  const preRuntimes = digest.logs.filter(log => log.isPreRuntime && log.asPreRuntime[0].toString() === 'SUB_');

  if (!preRuntimes || preRuntimes.length === 0) {
    return undefined;
  }

  const {
    solution
  } = api.registry.createType('SubPreDigest', preRuntimes[0].asPreRuntime[1]);
  return solution.reward_address;
}

function createHeaderExtended(registry, header, api) {
  const HeaderBase = registry.createClass('Header');

  class SubHeaderExtended extends HeaderBase {
    #author;

    constructor(registry, header, api) {
      super(registry, header);
      this.#author = extractAuthor(this.digest, api);
      this.createdAtHash = header === null || header === void 0 ? void 0 : header.createdAtHash;
    }

    get author() {
      return this.#author;
    }

  }

  return new SubHeaderExtended(registry, header, api);
}

function subscribeNewHeads(instanceId, api) {
  return memo(instanceId, () => combineLatest([api.rpc.chain.subscribeNewHeads()]).pipe(map(([header]) => {
    return createHeaderExtended(header.registry, header, api);
  })));
}

function getHeader(instanceId, api) {
  return memo(instanceId, blockHash => combineLatest([api.rpc.chain.getHeader(blockHash)]).pipe(map(([header]) => {
    return createHeaderExtended(header.registry, header, api);
  })));
}

const definitions = {
  derives: {
    chain: {
      bestNumber,
      bestNumberFinalized,
      bestNumberLag,
      getBlock,
      getHeader,
      subscribeNewBlocks,
      subscribeNewHeads
    }
  },
  types: [{
    minmax: [0, undefined],
    types: {
      Solution: {
        public_key: 'AccountId32',
        reward_address: 'AccountId32'
      },
      SubPreDigest: {
        slot: 'u64',
        solution: 'Solution'
      }
    }
  }]
};
export default definitions;