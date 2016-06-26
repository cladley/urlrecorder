import React      from 'react';
import ReactDOM   from 'react-dom';
import store      from '../store/urlStore';
import UrlList    from './UrlList';
import AddUrlForm from './AddUrlForm';

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
        var data = this.state.data.filter((urlItem, index) => {
            return urlItem.id !== id;
        });

        this.setState({
            data: data
        });
        store.save(data);
    },

    onSubmitUrlItem(urlItem) {
        let data = this.state.data.concat([urlItem]);
        this.setState({
            data: data
        });
        store.save(data);
    },

    render() {
        return (
            <div>
               
                <AddUrlForm  onSubmitUrl={this.onSubmitUrlItem}  />
                <hr/>

                <UrlList urls={this.state.data} onUpdateUrlItem={this.onUpdate} onDeleteUrlItem={this.onDelete} perPage={3} />
            </div>
        );
    }
});