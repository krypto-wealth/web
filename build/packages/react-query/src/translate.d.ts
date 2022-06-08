/// <reference types="react" />
import type { UseTranslationResponse } from 'react-i18next';
export declare function useTranslation(): UseTranslationResponse<'react-query', undefined>;
declare const _default: <C extends import("react").ComponentType<any>, ResolvedProps = JSX.LibraryManagedAttributes<C, import("react-i18next").Subtract<import("react").ComponentProps<C>, import("react-i18next").WithTranslationProps>>>(component: C) => import("react").ComponentType<Omit<ResolvedProps, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
export default _default;
