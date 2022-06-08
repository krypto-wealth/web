import React from 'react';
import { FileInfo, SaveFile } from './types';
export interface Props {
    className?: string;
    file: FileInfo;
    onClose?: () => void;
    onSuccess?: (res: SaveFile) => void;
}
declare function UploadModal({ className, file, onClose, onSuccess }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof UploadModal, any, {}, never>>;
export default _default;
