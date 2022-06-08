/// <reference types="bn.js" />
import type { Registrar } from '@polkadot/react-hooks/types';
import type { ProxyDefinition, RegistrationJudgement, Voting } from '@polkadot/types/interfaces';
import { H256, Multisig } from '@polkadot/types/interfaces';
import { BN } from '@polkadot/util';
declare class MockApiHooks {
    multisigApprovals: [H256, Multisig][] | undefined;
    delegations: Voting[] | undefined;
    proxies: [ProxyDefinition[], BN][] | undefined;
    subs: string[] | undefined;
    judgements: RegistrationJudgement[] | undefined;
    registrars: Registrar[];
    setDelegations(delegations: Voting[]): void;
    setMultisigApprovals(multisigApprovals: [H256, Multisig][]): void;
    setProxies(proxies: [ProxyDefinition[], BN][]): void;
    setSubs(subs: string[] | undefined): void;
    setJudgements(judgements: RegistrationJudgement[] | undefined): void;
    setRegistrars(registrars: Registrar[]): void;
}
export declare const mockApiHooks: MockApiHooks;
export {};
