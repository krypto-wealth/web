import type { Props as BaseProps } from '../types';
import React from 'react';
interface Props extends BaseProps {
    childrenPre?: React.ReactNode;
}
declare function ErrorDisplay(props: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof ErrorDisplay, any, {}, never>>;
export default _default;
