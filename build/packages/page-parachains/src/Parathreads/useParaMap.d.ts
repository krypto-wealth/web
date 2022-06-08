import type { ParaId } from '@polkadot/types/interfaces';
import type { LeaseInfo } from '../types';
declare type Result = [ParaId, LeaseInfo[]][];
declare const _default: (ids?: ParaId[] | undefined) => Result | undefined;
export default _default;
