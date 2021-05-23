import React, { Component } from 'react';
import './index.less';
interface GridItemProps {
    children?: any;
}
interface GridProps {
    children?: Array<any>;
}
export default class Grid extends Component<GridProps, any> {
    static Item: React.FC<GridItemProps>;
    render(): JSX.Element;
}
export {};
