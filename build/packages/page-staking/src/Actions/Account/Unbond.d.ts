import type { AccountId, StakingLedger } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    controllerId?: AccountId | null;
    onClose: () => void;
    stakingLedger?: StakingLedger;
    stashId: string;
}
declare function Unbond({ controllerId, onClose, stakingLedger, stashId }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Unbond, any, {}, never>>;
export default _default;
