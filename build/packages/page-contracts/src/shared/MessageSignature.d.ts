import type { AbiMessage } from '@polkadot/api-contract/types';
import React from 'react';
export interface Props {
    asConstructor?: boolean;
    className?: string;
    message: AbiMessage;
    params?: unknown[];
    withTooltip?: boolean;
}
declare function MessageSignature({ className, message: { args, isConstructor, isMutating, method, returnType }, params, withTooltip }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof MessageSignature, any, {}, never>>;
export default _default;
