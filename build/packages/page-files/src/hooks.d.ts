import { SaveFile } from './types';
export interface Files {
    files: SaveFile[];
}
export interface WrapFiles extends Files {
    isLoad: boolean;
    setFiles: (files: SaveFile[]) => void;
}
export declare function useFiles(): WrapFiles;
