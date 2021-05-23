import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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

    static alert = alert;

    render() {
        const { title, content, onClose } = this.props;
        return (
            <>
                <div className="sail-overlay"></div>
                <div className="sail-dialog">
                    <div className="sail-dialog-title">{title}</div>
                    <div className="sail-dialog-content">{content}</div>
                </div>
            </>
        )
    }
}
let rootId = 1;
function alert({ title, content }: IAlert) {
    const root = document.createElement("div");
    root.setAttribute('id', `dialog-${rootId}`);
    document.body.appendChild(root);
    ReactDOM.render(<Dialog title={title} content={content} />, root);
    return rootId;
}