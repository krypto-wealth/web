/// <reference types="bn.js" />
import type { PalletProxyProxyDefinition } from '@polkadot/types/lookup';
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    className?: string;
    onClose: () => void;
    previousProxy?: [PalletProxyProxyDefinition[], BN];
    proxiedAccount: string;
}
declare function ProxyOverview({ className, onClose, previousProxy: [existing], proxiedAccount }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof ProxyOverview, any, {}, never>>;
export default _default;
