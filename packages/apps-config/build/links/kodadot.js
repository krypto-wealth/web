// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { externalLogos } from "../ui/logos/index.js";

const getNetwork = _chain => {
  const chain = _chain === 'kusama' ? 'rmrk' : _chain;
  return `https://kodadot.xyz/${chain}/u/`;
};

export default {
  chains: {
    Kusama: 'kusama',
    Statemine: 'statemine',
    Westend: 'westend',
    Westmint: 'westmint'
  },
  create: (_chain, _path, data) => `${getNetwork(_chain)}${data.toString()}`,
  isActive: true,
  logo: externalLogos.kodadot,
  paths: {
    address: 'account'
  },
  url: 'https://kodadot.xyz'
};