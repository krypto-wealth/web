import type { TFunction } from '../types';
import type { LinkOption } from './types';
export { CUSTOM_ENDPOINT_KEY } from './development';
export * from './production';
export * from './testing';
export declare function createWsEndpoints(t?: TFunction, firstOnly?: boolean, withSort?: boolean): LinkOption[];
