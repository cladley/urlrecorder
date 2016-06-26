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

    onDelete(id) {
        console.log(`id is = ${id}`);
        var data = this.state.data.filter((urlItem, index) => {
            if(urlItem.id === id) {
                console.log("We have a match");
            }
            return urlItem.id !== id;
        });

        this.setState({
            data: data
        });
        store.save(data);
    },

    render() {
        return (
            <div>
                <h3>Overview Page</h3>

                <UrlList urls={this.state.data} onUpdateUrlItem={this.onUpdate} onDeleteUrlItem={this.onDelete}/>
            </div>
        );
    }
});