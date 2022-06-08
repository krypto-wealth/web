import React from 'react';
interface Props {
    className?: string;
    isDisabled: boolean;
    proxies: Record<string, string[]>;
}
declare function Bid({ className, isDisabled, proxies }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Bid>;
export default _default;
