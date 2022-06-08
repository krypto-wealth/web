"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  getChainTypes: true,
  typesBundle: true,
  typesChain: true
};
exports.getChainTypes = getChainTypes;
exports.typesBundle = void 0;
Object.defineProperty(exports, "typesChain", {
  enumerable: true,
  get: function () {
    return _chain.default;
  }
});

var _chain = _interopRequireDefault(require("./chain"));

var _spec = _interopRequireDefault(require("./spec"));

var _constants = require("./constants");

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _constants[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constants[key];
    }
  });
});

var _params = require("./params");

Object.keys(_params).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _params[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _params[key];
    }
  });
});

// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0
function getChainTypes(_specName, chainName) {
  return { ...(_chain.default[chainName] || {})
  };
}

const typesBundle = {
  spec: _spec.default
};
exports.typesBundle = typesBundle;