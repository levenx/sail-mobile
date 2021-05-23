import React, { FC, ReactNode } from 'react';
import classnames from 'classnames';
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

const Button: FC<IButton> = ({ text, children, type = 'primary', size, disabled, shape, onClick, htmlFor }) => {
    return (
        <button
            type={htmlFor ? 'submit' : "button"}
            onClick={onClick}
            className={classnames('sail-btn', {
                "sail-btn-primary": type === 'primary',
                'sail-btn-disabled': disabled || type === 'disabled',
                'sail-btn-radius': shape === 'round',
                'sail-btn-lg': size === 'large'
            })}>{text || children}</button>
    )
}

export default Button;