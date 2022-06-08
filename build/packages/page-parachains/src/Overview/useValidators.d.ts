import type { AccountId, GroupIndex, ParaId } from '@polkadot/types/interfaces';
import type { ValidatorInfo } from './types';
declare type Result = [AccountId[] | null, Record<string, [GroupIndex, ValidatorInfo[]]>];
declare const _default: (ids?: ParaId[] | undefined) => Result;
export default _default;
