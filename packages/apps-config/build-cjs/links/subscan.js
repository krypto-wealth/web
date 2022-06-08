"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logos = require("../ui/logos");

// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0
var _default = {
  chains: {
    Acala: 'acala',
    'Acala Mandala TC5': 'acala-testnet',
    'Kwe Zero': 'kwezero',
    Altair: 'altair',
    Astar: 'astar',
    Bifrost: 'bifrost',
    Calamari: 'calamari',
    'Centrifuge Mainnet': 'centrifuge',
    ChainX: 'chainx',
    Clover: 'clv',
    'Crab-parachain': 'crab-parachain',
    Crust: 'crust',
    'Crust Collator': 'shadow',
    'Crust Maxwell': 'maxwell',
    Darwinia: 'darwinia',
    'Darwinia Crab': 'crab',
    Dock: 'dock',
    Edgeware: 'edgeware',
    'Encointer-parachain': 'encointer',
    Equilibrium: 'equilibrium',
    'Integritee Collator': 'integritee',
    Interlay: 'interlay',
    'KILT Peregrine': 'kilt-testnet',
    'KILT Spiritnet': 'spiritnet',
    Karura: 'karura',
    Khala: 'khala',
    Kintsugi: 'kintsugi',
    Kulupu: 'kulupu',
    Kusama: 'kusama',
    Litentry: 'litentry',
    Litmus: 'litmus',
    Moonbase: 'moonbase',
    Moonbeam: 'moonbeam',
    Moonriver: 'moonriver',
    'Nodle Parachain': 'nodle',
    Pangolin: 'pangolin',
    Pangoro: 'pangoro',
    Parallel: 'parallel',
    'Parallel Heiko': 'parallel-heiko',
    Picasso: 'picasso',
    'Pioneer Network': 'pioneer',
    Plasm: 'plasm',
    Polkadex: 'polkadex',
    Polkadot: 'polkadot',
    Polymesh: 'polymesh',
    'QUARTZ by UNIQUE': 'quartz',
    Robonomics: 'robonomics',
    Rococo: 'rococo',
    SORA: 'sora',
    Shibuya: 'shibuya',
    'Shibuya Testnet': 'shibuya',
    Shiden: 'shiden',
    Stafi: 'stafi',
    Statemine: 'statemine',
    Statemint: 'statemint',
    Subgame: 'subgame',
    Uniarts: 'uniarts',
    Westend: 'westend',
    Zeitgeist: 'zeitgeist'
  },
  create: (chain, path, data) => `https://${chain}.subscan.io/${path}/${data.toString()}`,
  isActive: true,
  logo: _logos.externalLogos.subscan,
  paths: {
    address: 'account',
    block: 'block',
    bounty: 'bounty',
    council: 'council',
    extrinsic: 'extrinsic',
    proposal: 'democracy_proposal',
    referendum: 'referenda',
    techcomm: 'tech',
    treasury: 'treasury',
    validator: 'validator'
  },
  url: 'https://subscan.io/'
};
exports.default = _default;