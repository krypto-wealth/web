// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { defaultT } from "../util.js";
import { createCustom, createDev, createOwn } from "./development.js";
import { prodChains } from "./production.js";
import { expandEndpoints } from "./util.js";
export { CUSTOM_ENDPOINT_KEY } from "./development.js";
export * from "./production.js";
export * from "./testing.js";
export function createWsEndpoints(t = defaultT, firstOnly = false, withSort = true) {
  return [...createCustom(t), {
    isDisabled: false,
    isHeader: true,
    isSpaced: true,
    text: t('rpc.header.live', 'Live networks', {
      ns: 'apps-config'
    }),
    textBy: '',
    value: ''
  }, ...expandEndpoints(t, prodChains, firstOnly, withSort), {
    isDisabled: false,
    isHeader: true,
    text: t('rpc.header.test', 'Test networks', {
      ns: 'apps-config'
    }),
    textBy: '',
    value: ''
  }, ...createDev(t), ...createOwn(t)].filter(({
    isDisabled
  }) => !isDisabled);
}