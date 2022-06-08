"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInflationParams = getInflationParams;

var _constants = require("../constants");

// Copyright 2017-2022 @polkadot/app-config authors & contributors
// SPDX-License-Identifier: Apache-2.0
const DEFAULT_PARAMS = {
  auctionAdjust: 0,
  auctionMax: 0,
  falloff: 0.05,
  maxInflation: 0.1,
  minInflation: 0.025,
  stakeTarget: 0.5
};
const KNOWN_PARAMS = {
  [_constants.DOCK_POS_TESTNET_GENESIS]: { ...DEFAULT_PARAMS,
    stakeTarget: 0.75
  },
  [_constants.KUSAMA_GENESIS]: { ...DEFAULT_PARAMS,
    auctionAdjust: 0.3 / 60,
    auctionMax: 60,
    stakeTarget: 0.75
  },
  [_constants.NEATCOIN_GENESIS]: { ...DEFAULT_PARAMS,
    stakeTarget: 0.75
  },
  [_constants.NFTMART_GENESIS]: { ...DEFAULT_PARAMS,
    falloff: 0.04,
    stakeTarget: 0.60
  },
  [_constants.POLKADOT_GENESIS]: { ...DEFAULT_PARAMS,
    stakeTarget: 0.75
  }
};

function getInflationParams(api) {
  return KNOWN_PARAMS[api.genesisHash.toHex()] || DEFAULT_PARAMS;
}