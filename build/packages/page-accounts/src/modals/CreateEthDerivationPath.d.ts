import React from 'react';
import { DeriveValidationOutput } from '../types';
interface Props {
    className?: string;
    onChange: (string: string) => void;
    seedType: string;
    derivePath: string;
    deriveValidation: DeriveValidationOutput | undefined;
    seed: string;
}
export declare const ETH_DEFAULT_PATH = "m/44'/60'/0'/0/0";
declare function CreateEthDerivationPath({ className, derivePath, deriveValidation, onChange, seedType }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof CreateEthDerivationPath>;
export default _default;
