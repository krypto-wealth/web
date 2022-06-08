import type { MapMember } from '../types';
import React from 'react';
interface Props {
    className?: string;
    mapMembers?: MapMember[];
}
declare function Members({ className, mapMembers }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Members>;
export default _default;
