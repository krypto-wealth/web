/// <reference types="bn.js" />
import type { StakerState } from '@polkadot/react-hooks/types';
import type { PalletStakingUnappliedSlash } from '@polkadot/types/lookup';
import type { SortedTargets } from '../../types';
import React from 'react';
import { BN } from '@polkadot/util';
interface Props {
    allSlashes?: [BN, PalletStakingUnappliedSlash[]][];
    className?: string;
    isDisabled?: boolean;
    info: StakerState;
    minCommission?: BN;
    next?: string[];
    stashId: string;
    targets: SortedTargets;
    validators?: string[];
}
declare function Account({ allSlashes, className, info: { controllerId, destination, hexSessionIdNext, hexSessionIdQueue, isLoading, isOwnController, isOwnStash, isStashNominating, isStashValidating, nominating, sessionIds, stakingLedger, stashId }, isDisabled, minCommission, targets }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Account, any, {}, never>>;
export default _default;
