import type { CollectiveType } from './types';
interface Result {
    isMember: boolean;
    members: string[];
}
export declare const useCollectiveMembers: (collective: CollectiveType) => Result;
export {};
