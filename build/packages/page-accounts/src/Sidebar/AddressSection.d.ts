import React from 'react';
import { AddressFlags } from '@polkadot/react-hooks/types';
interface Props {
    value: string;
    editingName: boolean;
    defaultValue: string;
    onChange: (value: string) => void;
    flags: AddressFlags;
    accountIndex: string | undefined;
}
declare function AddressSection({ accountIndex, defaultValue, editingName, flags, onChange, value }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof AddressSection>;
export default _default;
