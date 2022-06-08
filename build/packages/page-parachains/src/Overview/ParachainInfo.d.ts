import type { ParaId } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    className?: string;
    id: ParaId;
}
declare function ParachainInfo({ className, id }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof ParachainInfo, any, {}, never>>;
export default _default;
