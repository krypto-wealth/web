import React from 'react';
interface Props {
    className?: string;
    controllerId: string;
    nominating?: string[];
    onClose: () => void;
    stashId: string;
}
declare function KickNominees({ className, controllerId, nominating, onClose, stashId }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof KickNominees>;
export default _default;
