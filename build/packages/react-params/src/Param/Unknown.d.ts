import type { Props as BaseProps } from '../types';
import React from 'react';
interface Props extends BaseProps {
    children?: React.ReactNode;
}
declare function Unknown(props: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Unknown>;
export default _default;
