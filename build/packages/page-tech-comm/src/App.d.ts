import React from 'react';
interface Props {
    basePath: string;
    className?: string;
    type: 'membership' | 'technicalCommittee';
}
declare function TechCommApp({ basePath, className, type }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof TechCommApp>;
export default _default;
