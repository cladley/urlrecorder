import React from 'react';
import ReactDOM from 'react-dom';
import store from '../store/linksStore.js';


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
})