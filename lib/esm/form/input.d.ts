import { FC } from 'react';
interface InputProps {
    onChange?: (name: any, value: any) => void;
    name?: string;
    value?: any;
}
declare const Input: FC<InputProps>;
export default Input;
