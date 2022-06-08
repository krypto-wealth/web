import type { ApiPromise } from '@polkadot/api';
import type { SubmittableExtrinsicFunction } from '@polkadot/api/types';
import type { Props, RawParam } from '@polkadot/react-params/types';
import React from 'react';
export declare function extractInitial(api: ApiPromise, initialValue: SubmittableExtrinsicFunction<'promise'>, input?: RawParam): {
    initialArgs?: RawParam[];
    initialValue: SubmittableExtrinsicFunction<'promise'>;
};
declare function CallDisplay({ className, defaultValue, isDisabled, isError, label, onChange, onEnter, onEscape, withLabel }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof CallDisplay>;
export default _default;
