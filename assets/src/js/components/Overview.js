import React    from 'react';
import ReactDOM from 'react-dom';
import store    from '../store/urlStore';
import UrlList  from './UrlList';

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

                <UrlList urls={this.state.data} />
            </div>
        );
    }
});