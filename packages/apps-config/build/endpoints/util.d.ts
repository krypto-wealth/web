import type { TFunction } from '../types';
import type { EndpointOption, LinkOption } from './types';
export declare function expandEndpoints(t: TFunction, input: EndpointOption[], firstOnly: boolean, withSort: boolean): LinkOption[];
