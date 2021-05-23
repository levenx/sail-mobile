import React, { FC } from 'react';

interface InputProps {
    onChange?: (name, value) => void;
    name?: string;
    value?: any;
}

const Input: FC<InputProps> = ({ name, value, onChange }) => {
    return <input value={value} onChange={e => { onChange(name, e.target.value) }} />
}

export default Input;