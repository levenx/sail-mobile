import React, { FC, ReactNode } from 'react';

interface IDrawer {
    open?: boolean;
    position?: 'left' | 'right' | 'bottom' | 'top';
    content?: ReactNode;
}

const Drawer: FC<IDrawer> = () => {
    return <div>IDrawer</div>
}

export default Drawer;