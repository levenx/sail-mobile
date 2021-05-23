import React, { FC, ReactNode } from 'react';
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

const Drawer: FC<IDrawer> = ({ visible, position, content, children, zIndex = 100, onClose, style }) => {
    return <>
        <div className="sail-overlay"
            onClick={onClose}
            style={{ zIndex, visibility: visible ? 'visible' : 'hidden' }}></div>
        <div className="sail-drawer sail-drawer__bottom sail-drawer__round"
            style={{
                height: '50%', zIndex: 999, bottom: '-100%',
                transform: `translateY(${visible ? '-200%' : '-100%'})`,
                ...style
            }}>
            <div className="sail-drawer-content">
                {children}
            </div>
        </div>
    </>
}

export default Drawer;