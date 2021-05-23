import { Component } from 'react';
declare function success(): void;
declare function error(): void;
declare function clear(): void;
export default class Notify extends Component {
    static success: typeof success;
    static error: typeof error;
    static clear: typeof clear;
    render(): any;
}
export {};
