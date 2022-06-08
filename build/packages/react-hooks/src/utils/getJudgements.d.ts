import type { DeriveAccountRegistration } from '@polkadot/api-derive/types';
import type { DisplayedJudgement } from '@polkadot/react-components/types';
import type { SortedJudgements } from '@polkadot/react-components/util/types';
import type { RegistrationJudgement } from '@polkadot/types/interfaces';
export declare function getJudgements(identity: DeriveAccountRegistration | undefined): SortedJudgements;
export declare function groupJudgements(judgements: RegistrationJudgement[]): Record<DisplayedJudgement, RegistrationJudgement[]>;
