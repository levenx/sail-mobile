import React, { FC, ReactNode } from 'react';
import './index.less';
export interface IButton {
    text?: string;
    children?: ReactNode;
    htmlFor?: boolean;
    type?: 'primary' | 'disabled';
    size?: 'large' | 'middle' | 'small';
    disabled?: boolean;
    shape?: 'circle' | 'round';
    onClick?: React.MouseEventHandler<HTMLElement>;
}
declare const Button: FC<IButton>;
export default Button;
