// welcome to levenx guard
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('classnames'), require('@fortawesome/react-fontawesome'), require('@fortawesome/free-regular-svg-icons'), require('@fortawesome/free-solid-svg-icons'), require('react-dom')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'classnames', '@fortawesome/react-fontawesome', '@fortawesome/free-regular-svg-icons', '@fortawesome/free-solid-svg-icons', 'react-dom'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.SailUI = {}, global.React, global.classnames, global.reactFontawesome, global.freeRegularSvgIcons, global.freeSolidSvgIcons, global.ReactDOM));
}(this, (function (exports, React, classnames, reactFontawesome, freeRegularSvgIcons, freeSolidSvgIcons, ReactDOM) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var classnames__default = /*#__PURE__*/_interopDefaultLegacy(classnames);
    var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

    const Button = ({ text, children, type = 'primary', size, disabled, shape, onClick, htmlFor }) => {
        return (React__default['default'].createElement("button", { type: htmlFor ? 'submit' : "button", onClick: onClick, className: classnames__default['default']('sail-btn', {
                "sail-btn-primary": type === 'primary',
                'sail-btn-disabled': disabled || type === 'disabled',
                'sail-btn-radius': shape === 'round',
                'sail-btn-lg': size === 'large'
            }) }, text || children));
    };

    const Table = () => {
        return React__default['default'].createElement("table", null,
            React__default['default'].createElement("tr", null,
                React__default['default'].createElement("td", null, "11")));
    };

    const Switch = () => {
        return React__default['default'].createElement("div", null, "Switch");
    };

    const Icon = ({ value, size = "lg", color = '#000', spin = false, border = false, style }) => {
        return React__default['default'].createElement(reactFontawesome.FontAwesomeIcon, { icon: IconFactory(value), size: size, color: color, spin: spin, border: border, style: style });
    };
    function IconFactory(type) {
        switch (type) {
            case 'check-circle':
                return freeRegularSvgIcons.faCheckCircle;
            case 'check-square':
                return freeRegularSvgIcons.faCheckSquare;
            case 'clock':
                return freeRegularSvgIcons.faClock;
            case 'copy':
                return freeRegularSvgIcons.faClone;
            case 'comment':
                return freeRegularSvgIcons.faComment;
            case 'comments':
                return freeRegularSvgIcons.faComments;
            case 'comment-alt':
                return freeRegularSvgIcons.faCommentAlt;
            case 'comment-dots':
                return freeRegularSvgIcons.faCommentDots;
            case 'compass':
                return freeRegularSvgIcons.faCompass;
            case 'right':
                return freeSolidSvgIcons.faChevronRight;
            case 'left':
                return freeSolidSvgIcons.faChevronLeft;
            case 'anchor':
                return freeSolidSvgIcons.faAnchor;
            default:
                return freeSolidSvgIcons.faChevronRight;
        }
    }

    const Cell = ({ title, value, url, border, isLink, onClick }) => {
        return React__default['default'].createElement("div", { className: "sail-cell", onClick: onClick && onClick },
            React__default['default'].createElement("div", { className: "sail-cell-title" }, title),
            React__default['default'].createElement("div", { className: "sail-cell-value" }, value),
            isLink && React__default['default'].createElement("div", { className: "sail-cell-arrow" },
                React__default['default'].createElement(Icon, { value: "right", style: { fontSize: 14, color: '#969799' } })));
    };

    const CellGroup = ({ title, border, children }) => {
        return React__default['default'].createElement("div", { className: 'sail-block' },
            React__default['default'].createElement("div", { className: "sail-cell-group-title" }, title),
            children);
    };

    const Card = () => {
        return React__default['default'].createElement("div", null, "ICard");
    };

    class Dialog extends React.Component {
        render() {
            const { title, content, onClose } = this.props;
            return (React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement("div", { className: "sail-overlay" }),
                React__default['default'].createElement("div", { className: "sail-dialog" },
                    React__default['default'].createElement("div", { className: "sail-dialog-title" }, title),
                    React__default['default'].createElement("div", { className: "sail-dialog-content" }, content))));
        }
    }
    Dialog.alert = alert;
    let rootId = 1;
    function alert({ title, content }) {
        const root = document.createElement("div");
        root.setAttribute('id', `dialog-${rootId}`);
        document.body.appendChild(root);
        ReactDOM__default['default'].render(React__default['default'].createElement(Dialog, { title: title, content: content }), root);
        return rootId;
    }

    const ActionSheet = () => {
        return React__default['default'].createElement("div", null, "ActionSheet");
    };

    const context = React.createContext({});
    const { Provider, Consumer } = context;

    const FormItem = ({ label, name, value, rules, trigger, children, onChange }) => {
        const curValue = React.useContext(context)[name];
        return React__default['default'].createElement("div", { className: "sail-cell sail-item" },
            React__default['default'].createElement("div", { className: "sail-item-label" },
                React__default['default'].createElement("span", null, label)),
            React__default['default'].createElement("div", { className: "sail-item-value" },
                React__default['default'].createElement("div", { className: "sail-item-body" }, React__default['default'].cloneElement(children, { onChange, name, value: curValue })),
                React__default['default'].createElement("div", { className: "sail-item-error" })));
    };
    class Form extends React.Component {
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
            return (React__default['default'].createElement(Provider, { value: values },
                React__default['default'].createElement("form", { className: "", onSubmit: (event) => {
                        event.preventDefault();
                        onSubmit(values);
                    } }, Array.isArray(children) ? children.map((child, inx) => {
                    return React__default['default'].cloneElement(child, { key: inx, onChange: this.onChange });
                })
                    :
                        React__default['default'].cloneElement(children, { onChange: this.onChange }))));
        }
    }
    Form.Item = FormItem;

    const Input = ({ name, value, onChange }) => {
        return React__default['default'].createElement("input", { value: value, onChange: e => { onChange(name, e.target.value); } });
    };

    const NavBar = ({ title, fixed, border, zIndex, left, right, icon }) => {
        return React__default['default'].createElement("div", { className: "sail-nav-bar", style: { border: border && '1px solid #f7f8fa', zIndex } },
            React__default['default'].createElement("div", { className: "sail-nav-bar-content" },
                React__default['default'].createElement("div", { className: "sail-nav-bar-left" },
                    icon || React__default['default'].createElement(Icon, { value: "left", color: "#1989fa", style: { fontSize: 16, marginRight: 7 } }),
                    React__default['default'].createElement("span", null, left)),
                React__default['default'].createElement("div", { className: "sail-nav-bar-center" }, title),
                React__default['default'].createElement("div", { className: "sail-nav-bar-right" },
                    React__default['default'].createElement("span", null, right))));
    };

    const Item$1 = ({ icon, title, onClick }) => {
        return React__default['default'].createElement("div", { className: "sail-tabbar-item", onClick: onClick },
            React__default['default'].createElement("div", { className: "sail-tabbar-item-icon" }, icon),
            React__default['default'].createElement("div", { className: "sail-tabbar-item-text" }, title));
    };
    class TabBar extends React.Component {
        render() {
            const { children, fixed } = this.props;
            return (React__default['default'].createElement("div", { className: classnames__default['default']("sail-tabbar", { "sail-tabbar-fixed": fixed }) }, children));
        }
    }
    TabBar.Item = Item$1;

    const Drawer = ({ visible, position, content, children, zIndex = 100, onClose, style }) => {
        return React__default['default'].createElement(React__default['default'].Fragment, null,
            React__default['default'].createElement("div", { className: "sail-overlay", onClick: onClose, style: { zIndex, visibility: visible ? 'visible' : 'hidden' } }),
            React__default['default'].createElement("div", { className: "sail-drawer sail-drawer__bottom sail-drawer__round", style: {
                    height: '50%', zIndex: 999, bottom: '-100%',
                    transform: `translateY(${visible ? '-200%' : '-100%'})`,
                    ...style
                } },
                React__default['default'].createElement("div", { className: "sail-drawer-content" }, children)));
    };

    const Badge = ({ children, size, value, color, dot, max = 99 }) => {
        if (children) {
            return React__default['default'].createElement("div", { className: "sail-badge__wrapper" },
                children,
                React__default['default'].createElement("div", { className: classnames__default['default']("sail-badge sail-badge__fixed", { "sail-badge__dot": dot }), style: { background: color } }, typeof (value) === 'number' ?
                    value > max ?
                        `${max}+` : value
                    : value));
        }
        else {
            return React__default['default'].createElement("div", { className: classnames__default['default']("sail-badge", { "sail-badge__dot": dot }), style: { background: color } }, typeof (value) === 'number' ?
                value > max ?
                    `${max}+` : value
                : value);
        }
    };

    const Divider = ({ dashed = false, hairline = true, position = "center", children }) => {
        return React__default['default'].createElement("div", { className: classnames__default['default'](`sail-divider sail-divider__content-${position}`, { "sail-divider__hairline": hairline, "sail-divider__dashed": dashed }) }, children);
    };

    const Item = ({ children }) => {
        return React__default['default'].createElement("div", { className: "sail-grid-item", style: { flexBasis: '33.3333%' } },
            React__default['default'].createElement("div", { className: "sail-grid-item__content sail-grid-item__content--center sail-grid-item__content--square sail-hairline" }, children));
    };
    class Grid extends React.Component {
        render() {
            const { children } = this.props;
            return (React__default['default'].createElement("div", { className: "sail-grid sail-hairline__top" }, children));
        }
    }
    Grid.Item = Item;

    exports.ActionSheet = ActionSheet;
    exports.Badge = Badge;
    exports.Button = Button;
    exports.Card = Card;
    exports.Cell = Cell;
    exports.CellGroup = CellGroup;
    exports.Dialog = Dialog;
    exports.Divider = Divider;
    exports.Drawer = Drawer;
    exports.Form = Form;
    exports.Grid = Grid;
    exports.Icon = Icon;
    exports.Input = Input;
    exports.NavBar = NavBar;
    exports.Switch = Switch;
    exports.TabBar = TabBar;
    exports.Table = Table;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sail-mobile.js.map
