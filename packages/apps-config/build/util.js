// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0
export function defaultT(keyOrText, text, options) {
  return options && options.replace && options.replace.host || text || keyOrText;
}