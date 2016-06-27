import React      from 'react';
import ReactDOM   from 'react-dom';
import store      from '../store/urlStore';
import UrlList    from './UrlList';
import AddUrlForm from './AddUrlForm';

export default React.createClass({
    /**
     * Returns Initial State object 
     * @return {Object} 
     */
    getInitialState() {
        return {
            data: store.get()
        };
    },
     /**
     * Update item
     * @param {Number} index
     * @param {String} url 
     */
    onUpdate(index, url) {
        this.state.data[index].url = url;
        this.setState({
            data: this.state.data
        });
        store.save(this.state.data);
    },
     /**
     * Delete Item
     * @param {Number} index
     */
    onDelete(id) {
        var data = this.state.data.filter((urlItem, index) => {
            return urlItem.id !== id;
        });

        this.setState({
            data: data
        });
        store.save(data);
    },
     /**
     * Save url item
     * @param {Object} urlItem
     */
    onSubmitUrlItem(urlItem) {
        let data = [urlItem].concat(this.state.data);
        this.setState({
            data: data
        });
        store.save(data);
    },
    /**
     * Render component
    */
    render() {
        return (
            <div>
               
                <AddUrlForm  onSubmitUrl={this.onSubmitUrlItem}  />
                <hr/>

                <UrlList urls={this.state.data} onUpdateUrlItem={this.onUpdate} onDeleteUrlItem={this.onDelete} perPage={20} />
            </div>
        );
    }
});