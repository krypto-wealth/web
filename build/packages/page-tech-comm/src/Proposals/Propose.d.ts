import React from 'react';
interface Props {
    isMember: boolean;
    members: string[];
    type: 'membership' | 'technicalCommittee';
}
declare function Propose({ isMember, members, type }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Propose>;
export default _default;
