import type { AddressFlags } from '@polkadot/react-hooks/types';
import React from 'react';
interface Props {
    flags: AddressFlags;
    className?: string;
}
declare function Flags({ className, flags: { isCouncil, isDevelopment, isExternal, isInjected, isMultisig, isNominator, isProxied, isSociety, isSudo, isTechCommittee, isValidator } }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Flags, any, {}, never>>;
export default _default;
