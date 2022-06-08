import type { ApiPromise } from '@polkadot/api';
import type { AbiMessage } from '@polkadot/api-contract/types';
import { ContractPromise } from '@polkadot/api-contract';
export declare function findCallMethod(callContract: ContractPromise | null, callMethodIndex?: number): AbiMessage | null;
export declare function getContractMethodFn(callContract: ContractPromise | null, callMethodIndex: number | null): AbiMessage | null;
export declare function getContractForAddress(api: ApiPromise, address: string | null): ContractPromise | null;
export declare function getCallMessageOptions(callContract: ContractPromise | null): unknown[];
