import React, { FC, ReactNode } from 'react';
import classnames from 'classnames';
import './index.less';

interface BadgeProps {
    size?: 'large' | 'small';
    value?: string | number | ReactNode;
    color?: string;
    dot?: boolean;
    max?: number;
    children?: string;
}

const Badge: FC<BadgeProps> = ({ children, size, value, color, dot, max = 99 }) => {
    if (children) {
        return <div className="sail-badge__wrapper">
            {children}
            <div className={classnames("sail-badge sail-badge__fixed", { "sail-badge__dot": dot })} style={{ background: color }}>
                {typeof (value) === 'number' ?
                    value > max ?
                        `${max}+` : value
                    : value}
            </div>
        </div>
    } else {
        return <div className={classnames("sail-badge", { "sail-badge__dot": dot })} style={{ background: color }}>
            {typeof (value) === 'number' ?
                value > max ?
                    `${max}+` : value
                : value}
        </div>
    }
}

export default Badge;