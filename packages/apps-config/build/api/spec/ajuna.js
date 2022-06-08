// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */
const definitions = {
  types: [{
    // on all versions
    minmax: [0, undefined],
    types: {
      Address: 'MultiAddress',
      LookupSource: 'MultiAddress'
    }
  }]
};
export default definitions;