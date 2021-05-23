// welcome to levenx guard
import React, { Component, createContext, useContext } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faCommentDots, faCommentAlt, faComments, faComment, faClone, faClock, faCheckSquare, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight, faAnchor, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import ReactDOM from 'react-dom';

const Button = ({ text, children, type = 'primary', size, disabled, shape, onClick, htmlFor }) => {
    return (React.createElement("button", { type: htmlFor ? 'submit' : "button", onClick: onClick, className: classnames('sail-btn', {
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
        case 'left':
            return faChevronLeft;
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

const context = createContext({});
const { Provider, Consumer } = context;

const FormItem = ({ label, name, value, rules, trigger, children, onChange }) => {
    const curValue = useContext(context)[name];
    return React.createElement("div", { className: "sail-cell sail-item" },
        React.createElement("div", { className: "sail-item-label" },
            React.createElement("span", null, label)),
        React.createElement("div", { className: "sail-item-value" },
            React.createElement("div", { className: "sail-item-body" }, React.cloneElement(children, { onChange, name, value: curValue })),
            React.createElement("div", { className: "sail-item-error" })));
};
class Form extends Component {
    constructor(props) {
        super(props);
        this.onChange = (name, value) => {
            this.setState({ values: Object.assign({}, this.state.values, { [name]: value }) });
        };
        this.state = {
            values: {}
        };
    }
    render() {
        const { onSubmit, children } = this.props;
        const { values } = this.state;
        return (React.createElement(Provider, { value: values },
            React.createElement("form", { className: "", onSubmit: (event) => {
                    event.preventDefault();
                    onSubmit(values);
                } }, Array.isArray(children) ? children.map((child, inx) => {
                return React.cloneElement(child, { key: inx, onChange: this.onChange });
            })
                :
                    React.cloneElement(children, { onChange: this.onChange }))));
    }
}
Form.Item = FormItem;

const Input = ({ name, value, onChange }) => {
    return React.createElement("input", { value: value, onChange: e => { onChange(name, e.target.value); } });
};

const NavBar = ({ title, fixed, border, zIndex, left, right, icon }) => {
    return React.createElement("div", { className: "sail-nav-bar", style: { border: border && '1px solid #f7f8fa', zIndex } },
        React.createElement("div", { className: "sail-nav-bar-content" },
            React.createElement("div", { className: "sail-nav-bar-left" },
                icon || React.createElement(Icon, { value: "left", color: "#1989fa", style: { fontSize: 16, marginRight: 7 } }),
                React.createElement("span", null, left)),
            React.createElement("div", { className: "sail-nav-bar-center" }, title),
            React.createElement("div", { className: "sail-nav-bar-right" },
                React.createElement("span", null, right))));
};

const Item$1 = ({ icon, title, onClick }) => {
    return React.createElement("div", { className: "sail-tabbar-item", onClick: onClick },
        React.createElement("div", { className: "sail-tabbar-item-icon" }, icon),
        React.createElement("div", { className: "sail-tabbar-item-text" }, title));
};
class TabBar extends Component {
    render() {
        const { children, fixed } = this.props;
        return (React.createElement("div", { className: classnames("sail-tabbar", { "sail-tabbar-fixed": fixed }) }, children));
    }
}
TabBar.Item = Item$1;

const Drawer = ({ visible, position, content, children, zIndex = 100, onClose, style }) => {
    return React.createElement(React.Fragment, null,
        React.createElement("div", { className: "sail-overlay", onClick: onClose, style: { zIndex, visibility: visible ? 'visible' : 'hidden' } }),
        React.createElement("div", { className: "sail-drawer sail-drawer__bottom sail-drawer__round", style: {
                height: '50%', zIndex: 999, bottom: '-100%',
                transform: `translateY(${visible ? '-200%' : '-100%'})`,
                ...style
            } },
            React.createElement("div", { className: "sail-drawer-content" }, children)));
};

const Badge = ({ children, size, value, color, dot, max = 99 }) => {
    if (children) {
        return React.createElement("div", { className: "sail-badge__wrapper" },
            children,
            React.createElement("div", { className: classnames("sail-badge sail-badge__fixed", { "sail-badge__dot": dot }), style: { background: color } }, typeof (value) === 'number' ?
                value > max ?
                    `${max}+` : value
                : value));
    }
    else {
        return React.createElement("div", { className: classnames("sail-badge", { "sail-badge__dot": dot }), style: { background: color } }, typeof (value) === 'number' ?
            value > max ?
                `${max}+` : value
            : value);
    }
};

const Divider = ({ dashed = false, hairline = true, position = "center", children }) => {
    return React.createElement("div", { className: classnames(`sail-divider sail-divider__content-${position}`, { "sail-divider__hairline": hairline, "sail-divider__dashed": dashed }) }, children);
};

const Item = ({ children }) => {
    return React.createElement("div", { className: "sail-grid-item", style: { flexBasis: '33.3333%' } },
        React.createElement("div", { className: "sail-grid-item__content sail-grid-item__content--center sail-grid-item__content--square sail-hairline" }, children));
};
class Grid extends Component {
    render() {
        const { children } = this.props;
        return (React.createElement("div", { className: "sail-grid sail-hairline__top" }, children));
    }
}
Grid.Item = Item;

export { ActionSheet, Badge, Button, Card, Cell, CellGroup, Dialog, Divider, Drawer, Form, Grid, Icon, Input, NavBar, Switch, TabBar, Table };
//# sourceMappingURL=sail-mobile.js.map
