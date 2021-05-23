import React, { FC, ReactNode } from 'react';
import Icon from '../icon/index';
import './index.less';

interface ICell {
    title: string | ReactNode;
    value: string | ReactNode;
    url?: string;
    border?: boolean;
    isLink?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
}

const Cell: FC<ICell> = ({ title, value, url, border, isLink, onClick }) => {
    return <div className="sail-cell" onClick={onClick && onClick}>
        <div className="sail-cell-title">{title}</div>
        <div className="sail-cell-value">{value}</div>
        {/* 是否存在箭头 */}
        {isLink && <div className="sail-cell-arrow">
            <Icon value="right" style={{ fontSize: 14, color: '#969799' }} />
        </div>}
    </div >
}

export default Cell;
