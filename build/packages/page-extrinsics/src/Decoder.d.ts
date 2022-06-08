import type { HexString } from '@polkadot/util/types';
import type { DecodedExtrinsic } from './types';
import React from 'react';
interface Props {
    className?: string;
    defaultValue?: HexString | null;
    setLast: (value: DecodedExtrinsic | null) => void;
}
declare function Decoder({ className, defaultValue, setLast }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Decoder, any, {}, never>>;
export default _default;
