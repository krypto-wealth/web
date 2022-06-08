import type { ModalState } from './types';
export declare const useModal: (defaultIsOpen?: boolean | undefined, onOpen?: (() => void) | undefined, onClose?: (() => void) | undefined) => ModalState;
