import { Component } from 'react';
import './index.less';
interface IDialog {
    title: string;
    content: string;
    onClose?: () => void;
}
interface IAlert {
    title: string;
    content: string;
}
export default class Dialog extends Component<IDialog, any> {
    static alert: typeof alert;
    render(): JSX.Element;
}
declare function alert({ title, content }: IAlert): number;
export {};
