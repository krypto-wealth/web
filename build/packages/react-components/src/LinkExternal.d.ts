/// <reference types="bn.js" />
import type { LinkTypes } from '@polkadot/apps-config/links/types';
import type { BN } from '@polkadot/util';
import React from 'react';
interface Props {
    className?: string;
    data: BN | number | string;
    hash?: string;
    isText?: boolean;
    isSidebar?: boolean;
    isSmall?: boolean;
    type: LinkTypes;
}
declare function LinkExternal({ className, data, hash, isSidebar, isSmall, isText, type }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof LinkExternal, any, {}, never>>;
export default _default;
