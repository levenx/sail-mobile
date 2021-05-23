import { FC, ReactNode } from 'react';
interface ICellGroup {
    title: string;
    border?: boolean;
    children?: ReactNode;
}
declare const CellGroup: FC<ICellGroup>;
export default CellGroup;
