import { FC, CSSProperties } from 'react';
declare type IconType = 'check-circle' | 'check-square' | 'right';
interface IconProps {
    value: IconType;
    color?: string;
    size?: "xs" | "lg" | "sm" | '2x';
    spin?: boolean;
    border?: boolean;
    style?: CSSProperties;
}
declare const Icon: FC<IconProps>;
export default Icon;
