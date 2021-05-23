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

    const Button = ({ text, children, type = 'primary', size, disabled, shape, onClick }) => {
        return (React__default['default'].createElement("button", { type: "button", onClick: onClick, className: classnames__default['default']('sail-btn', {
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

    exports.ActionSheet = ActionSheet;
    exports.Button = Button;
    exports.Card = Card;
    exports.Cell = Cell;
    exports.CellGroup = CellGroup;
    exports.Dialog = Dialog;
    exports.Icon = Icon;
    exports.Switch = Switch;
    exports.Table = Table;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
