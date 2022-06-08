import { IconName } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
interface Props {
    className?: string;
    icon: IconName;
    text: string;
}
declare function CurrentSection({ className, icon, text }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof CurrentSection, any, {}, never>>;
export default _default;
