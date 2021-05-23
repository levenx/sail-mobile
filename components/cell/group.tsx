import React, { FC, ReactNode } from 'react';

interface ICellGroup {
    title: string;
    border?: boolean;
    children?: ReactNode;
}

const CellGroup: FC<ICellGroup> = ({ title, border, children }) => {
    return <div className='sail-block'>
        <div className="sail-cell-group-title">{title}</div>
        {children}
    </div>
}

export default CellGroup;
