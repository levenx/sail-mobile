// welcome to levenx guard
import React, { Component } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faCommentDots, faCommentAlt, faComments, faComment, faClone, faClock, faCheckSquare, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight, faAnchor } from '@fortawesome/free-solid-svg-icons';
import ReactDOM from 'react-dom';

const Button = ({ text, children, type = 'primary', size, disabled, shape, onClick }) => {
    return (React.createElement("button", { type: "button", onClick: onClick, className: classnames('sail-btn', {
            "sail-btn-primary": type === 'primary',
            'sail-btn-disabled': disabled || type === 'disabled',
            'sail-btn-radius': shape === 'round',
            'sail-btn-lg': size === 'large'
        }) }, text || children));
};

const Table = () => {
    return React.createElement("table", null,
        React.createElement("tr", null,
            React.createElement("td", null, "11")));
};

const Switch = () => {
    return React.createElement("div", null, "Switch");
};

const Icon = ({ value, size = "lg", color = '#000', spin = false, border = false, style }) => {
    return React.createElement(FontAwesomeIcon, { icon: IconFactory(value), size: size, color: color, spin: spin, border: border, style: style });
};
function IconFactory(type) {
    switch (type) {
        case 'check-circle':
            return faCheckCircle;
        case 'check-square':
            return faCheckSquare;
        case 'clock':
            return faClock;
        case 'copy':
            return faClone;
        case 'comment':
            return faComment;
        case 'comments':
            return faComments;
        case 'comment-alt':
            return faCommentAlt;
        case 'comment-dots':
            return faCommentDots;
        case 'compass':
            return faCompass;
        case 'right':
            return faChevronRight;
        case 'anchor':
            return faAnchor;
        default:
            return faChevronRight;
    }
}

const Cell = ({ title, value, url, border, isLink, onClick }) => {
    return React.createElement("div", { className: "sail-cell", onClick: onClick && onClick },
        React.createElement("div", { className: "sail-cell-title" }, title),
        React.createElement("div", { className: "sail-cell-value" }, value),
        isLink && React.createElement("div", { className: "sail-cell-arrow" },
            React.createElement(Icon, { value: "right", style: { fontSize: 14, color: '#969799' } })));
};

const CellGroup = ({ title, border, children }) => {
    return React.createElement("div", { className: 'sail-block' },
        React.createElement("div", { className: "sail-cell-group-title" }, title),
        children);
};

const Card = () => {
    return React.createElement("div", null, "ICard");
};

class Dialog extends Component {
    render() {
        const { title, content, onClose } = this.props;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "sail-overlay" }),
            React.createElement("div", { className: "sail-dialog" },
                React.createElement("div", { className: "sail-dialog-title" }, title),
                React.createElement("div", { className: "sail-dialog-content" }, content))));
    }
}
Dialog.alert = alert;
let rootId = 1;
function alert({ title, content }) {
    const root = document.createElement("div");
    root.setAttribute('id', `dialog-${rootId}`);
    document.body.appendChild(root);
    ReactDOM.render(React.createElement(Dialog, { title: title, content: content }), root);
    return rootId;
}

const ActionSheet = () => {
    return React.createElement("div", null, "ActionSheet");
};

export { ActionSheet, Button, Card, Cell, CellGroup, Dialog, Icon, Switch, Table };
