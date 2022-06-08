/// <reference types="react" />
import type { IconName } from '@fortawesome/fontawesome-svg-core';
import type { ApiPromise } from '@polkadot/api';
import type { AppProps, BareProps } from '@polkadot/react-components/types';
export declare type RouteGroup = 'accounts' | 'developer' | 'governance' | 'network' | 'files' | 'settings';
export interface RouteProps extends AppProps, BareProps {
    location: any;
}
export interface Route {
    Component: React.ComponentType<RouteProps> | React.MemoExoticComponent<any>;
    Modal?: React.ComponentType<any> | React.MemoExoticComponent<any>;
    display: {
        isDevelopment?: boolean;
        isHidden?: boolean;
        isModal?: boolean;
        needsAccounts?: boolean;
        needsApi?: (string | string[])[];
        needsApiCheck?: (api: ApiPromise) => boolean;
        needsApiInstances?: boolean;
        needsSudo?: boolean;
        needsTeleport?: boolean;
    };
    group: RouteGroup;
    icon: IconName;
    isIgnored?: boolean;
    name: string;
    text: string;
    useCounter?: () => number | string | null;
}
export declare type Routes = Route[];
