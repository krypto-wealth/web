import type { Call } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    labelHash?: React.ReactNode;
    value?: Call | null;
    withHash?: boolean;
}
declare function CallExpander({ children, className, labelHash, value, withHash }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof CallExpander>;
export default _default;
