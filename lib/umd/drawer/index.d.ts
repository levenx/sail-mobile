import { FC, ReactNode } from 'react';
interface IDrawer {
    open?: boolean;
    position?: 'left' | 'right' | 'bottom' | 'top';
    content?: ReactNode;
}
declare const Drawer: FC<IDrawer>;
export default Drawer;
