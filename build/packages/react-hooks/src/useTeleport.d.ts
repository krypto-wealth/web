import type { LinkOption } from '@polkadot/apps-config/endpoints/types';
interface Teleport {
    allowTeleport: boolean;
    destinations: LinkOption[];
    isParaTeleport?: boolean;
    isRelayTeleport?: boolean;
    oneWay: number[];
}
export declare const useTeleport: () => Teleport;
export {};
