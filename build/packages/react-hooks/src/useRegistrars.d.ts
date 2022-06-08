import type { Registrar } from './types';
interface State {
    isRegistrar: boolean;
    registrars: Registrar[];
    skipQuery?: boolean;
}
export declare const useRegistrars: (skipQuery?: boolean | undefined) => State;
export {};
