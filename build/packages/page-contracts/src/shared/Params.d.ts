import type { Registry, TypeDef } from '@polkadot/types/types';
import React from 'react';
interface Props {
    isDisabled?: boolean;
    params?: ParamDef[] | null | '';
    onChange: (values: unknown[]) => void;
    onEnter?: () => void;
    registry: Registry;
}
interface ParamDef {
    name: string;
    type: TypeDef;
}
declare function Params({ isDisabled, onChange, onEnter, params: propParams, registry }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Params>;
export default _default;
