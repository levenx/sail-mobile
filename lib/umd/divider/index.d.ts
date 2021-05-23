import { FC } from 'react';
import './index.less';
interface DividerProps {
    dashed?: boolean;
    hairline?: boolean;
    position?: 'left' | 'center' | 'right';
    children?: any;
}
declare const Divider: FC<DividerProps>;
export default Divider;
