import React from 'react';
import { StatusName } from './types';
interface Props {
    bountyStatus: StatusName;
    className?: string;
}
declare function BountyStatusView({ bountyStatus, className }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof BountyStatusView, any, {}, never>>;
export default _default;
