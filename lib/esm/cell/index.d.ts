import React, { FC, ReactNode } from 'react';
import './index.less';
interface ICell {
    title: string | ReactNode;
    value: string | ReactNode;
    url?: string;
    border?: boolean;
    isLink?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
}
declare const Cell: FC<ICell>;
export default Cell;
