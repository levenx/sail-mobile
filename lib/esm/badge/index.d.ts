import { FC, ReactNode } from 'react';
import './index.less';
interface BadgeProps {
    size?: 'large' | 'small';
    value?: string | number | ReactNode;
    color?: string;
    dot?: boolean;
    max?: number;
    children?: string;
}
declare const Badge: FC<BadgeProps>;
export default Badge;
