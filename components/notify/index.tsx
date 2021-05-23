import React, { Component } from 'react';


function success() {

}

function error() {

}

function clear() {

}

export default class Notify extends Component {

    static success = success;

    static error = error;

    static clear = clear;

    render() {
        return null;
    }
}
