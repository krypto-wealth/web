/// <reference types="bn.js" />
import type { BN } from '@polkadot/util';
import React from 'react';
export interface BalanceActiveType {
    available?: boolean;
    bonded?: boolean | BN[];
    extraInfo?: [React.ReactNode, React.ReactNode][];
    locked?: boolean;
    redeemable?: boolean;
    reserved?: boolean;
    total?: boolean;
    unlocking?: boolean;
    vested?: boolean;
}
export interface CryptoActiveType {
    crypto?: boolean;
    nonce?: boolean;
}
export interface ValidatorPrefsType {
    unstakeThreshold?: boolean;
    validatorPayment?: boolean;
}
declare const _default: React.ComponentType<any>;
export default _default;
