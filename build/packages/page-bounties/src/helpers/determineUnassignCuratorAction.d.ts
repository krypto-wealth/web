/// <reference types="bn.js" />
import type { BountyStatus } from '@polkadot/types/interfaces';
import type { BN } from '@polkadot/util';
import { UserRole, ValidUnassignCuratorAction } from '../types';
export declare function determineUnassignCuratorAction(roles: UserRole[], status: BountyStatus, blocksUntilUpdate?: BN): ValidUnassignCuratorAction[];
