import React, { FC, ReactNode } from 'react';
import Icon from '../icon/index';
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

const NavBar: FC<NavBarProps> = ({ title, fixed, border, zIndex, left, right, icon }) => {
    return <div className="sail-nav-bar" style={{ border: border && '1px solid #f7f8fa', zIndex }}>
        <div className="sail-nav-bar-content">
            <div className="sail-nav-bar-left">
                {icon || <Icon value="left" color="#1989fa" style={{ fontSize: 16, marginRight: 7 }} />}
                <span>{left}</span>
            </div>
            <div className="sail-nav-bar-center">
                {title}
            </div>
            <div className="sail-nav-bar-right">
                <span>{right}</span>
            </div>
        </div>
    </div>
}
export default NavBar
