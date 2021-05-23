import { FC, ReactNode } from 'react';
import './index.less';
interface NavBarProps {
    title: string | ReactNode;
    fixed?: boolean;
    border?: boolean;
    zIndex?: number;
    left: string | ReactNode;
    right: string | ReactNode;
    icon?: ReactNode;
}
declare const NavBar: FC<NavBarProps>;
export default NavBar;
