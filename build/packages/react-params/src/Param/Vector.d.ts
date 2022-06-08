import type { ParamDef, Props, RawParam } from '../types';
import React from 'react';
export declare function getParams(inputParams: ParamDef[], prev: ParamDef[], max: number): ParamDef[];
export declare function getValues({ value }: RawParam): RawParam[];
declare function Vector({ className, defaultValue, isDisabled, label, onChange, overrides, registry, type, withLabel }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Vector>;
export default _default;
