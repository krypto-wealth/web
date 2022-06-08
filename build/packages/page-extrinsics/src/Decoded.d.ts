import type { SubmittableExtrinsic } from '@polkadot/api/types';
import React from 'react';
interface Props {
    className?: string;
    extrinsic?: SubmittableExtrinsic<'promise'> | null;
    isCall: boolean;
    withData?: boolean;
    withHash?: boolean;
}
declare function Decoded({ className, extrinsic, isCall, withData, withHash }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Decoded, any, {}, never>>;
export default _default;
