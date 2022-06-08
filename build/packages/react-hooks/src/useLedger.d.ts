import { Ledger } from '@polkadot/hw-ledger';
interface StateBase {
    hasLedgerChain: boolean;
    hasWebUsb: boolean;
    isLedgerCapable: boolean;
    isLedgerEnabled: boolean;
}
interface State extends StateBase {
    getLedger: () => Ledger;
}
export declare const useLedger: () => State;
export {};
