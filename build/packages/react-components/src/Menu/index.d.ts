import type { BaseProps, DividerProps, HeaderProps, ItemProps } from './types';
import React from 'react';
declare type MenuDef = React.FC<BaseProps> & {
    Divider: React.FC<DividerProps>;
    Item: React.FC<ItemProps>;
    Header: React.FC<HeaderProps>;
};
declare const Menu: MenuDef;
export default Menu;
