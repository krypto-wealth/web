/// <reference types="bn.js" />
import type { QueueTx } from '@polkadot/react-components/Status/types';
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    accountId: string | null;
    className?: string;
    currentItem: QueueTx;
    isSendable: boolean;
    onError: () => void;
    tip?: BN;
}
declare function Transaction({ accountId, className, currentItem: { extrinsic, isUnsigned, payload }, isSendable, onError, tip }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Transaction, any, {}, never>>;
export default _default;
