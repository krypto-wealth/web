import type { Codec } from '@polkadot/types/types';
import React from 'react';
export declare function toHumanJson(value: any): string;
export default function valueToText(type: string, value: Codec | undefined | null): React.ReactNode;
