/// <reference types="bn.js" />
import type { NodeRuntimeProxyType } from '@polkadot/types/lookup';
import type { BN } from '@polkadot/util';
interface Proxy {
    address: string;
    delay: BN;
    isOwned: boolean;
    type: NodeRuntimeProxyType;
}
interface State {
    hasOwned: boolean;
    owned: Proxy[];
    proxies: Proxy[];
}
declare const _default: (address?: string | null | undefined) => State;
export default _default;
