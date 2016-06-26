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

    onUpdate(index, url) {
        this.state.data[index].url = url;
        this.setState({
            data: this.state.data
        });
        store.save(this.state.data);
    },

    render() {
        return (
            <div>
                <h3>Overview Page</h3>

                <UrlList urls={this.state.data} onUpdateUrlItem={this.onUpdate}/>
            </div>
        );
    }
});