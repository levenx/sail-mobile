import { FC, ReactNode } from 'react';
import "./index.less";
interface IDrawer {
    visible?: boolean;
    position?: 'left' | 'right' | 'bottom' | 'top';
    content?: ReactNode;
    zIndex?: number;
    children?: any;
    onClose: () => void;
    style?: any;
}
declare const Drawer: FC<IDrawer>;
export default Drawer;
