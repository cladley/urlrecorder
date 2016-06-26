import React from 'react';
import ReactDOM from 'react-dom';
import store from '../store/urlStore.js';

export default React.createClass({
    getInitialState() {
        return {
            data: store.get()
        };
    },
    render() {
        return (
            <div>
                <h3>Overview Page</h3>


            </div>
        );
    }
});