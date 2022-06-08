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
    Bifrost: 'bifrost',
    Karura: 'karura',
    Khala: 'khala',
    Kusama: 'kusama',
    kintsugi: 'kintsugi'
  },
  create: (chain, path, data) => `https://${chain}.subsquare.io/${path}/${data.toString()}`,
  isActive: true,
  logo: _logos.externalLogos.subsquare,
  paths: {
    bounty: 'treasury/bounty',
    council: 'council/motion',
    external: 'democracy/external',
    proposal: 'democracy/proposal',
    referendum: 'democracy/referendum',
    tip: 'treasury/tip',
    treasury: 'treasury/proposal'
  },
  url: 'https://subsquare.io/'
};
exports.default = _default;