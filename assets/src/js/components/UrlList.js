import React      from 'react';
import ReactDOM   from 'react-dom';
import Pagination from './Pagination';
import utils      from '../utils/utils';

let UrlItem = React.createClass({
    /**
     * Returns Initial State object 
     * @return {Object} 
     */
    getInitialState() {
        return {
            url: this.props.url,
            initialUrl: this.props.url,
            edit: false,
            delete: false
        };
    },
    /**
     * Called when component - 
     */
    componentDidUpdate(){
        var input = ReactDOM.findDOMNode(this.refs.urlInput);
        if(input){
            input.focus();
        }
    },
    /**
     * On edit button clicked
     * @param {event}
     */
    onEdit(event) {
        event.stopPropagation();

        this.setState({
            edit: true
        });
    },
    /**
     * Closing edit view and saves url if valid
     * @param {event}
    */
    onEditClose(event) {
        var input = ReactDOM.findDOMNode(this.refs.urlInput);

        if(utils.isValidUrl(input.value)){
            this.setState({
                url: input.value,
                initialUrl: input.value
            });

            this.props.onUpdate(input.value);

        }else {
            this.setState({
                url: this.state.initialUrl
            });
        }

        this.setState({
            edit: false
        });
        window.removeEventListener('click', this.onEditClose);
    },
    /**
     * Called as text input changes
     * @param {event}
    */
    onChange(event) {
        this.setState({
            url: event.target.value
        });
    },
    /**
     * Called on keypress within text input
     * @param {event}
    */
    onKeyPress(event) {
        if (event.key === 'Enter') {
            this.onEditClose();
        }
    },
    /**
     * Show delete view
     * @param {event}
    */
    onTryDelete(event) {
        this.setState({
            delete: true
        });
    },
    /**
     * Delete UrlItem
     * @param {event}
    */
    onDelete(event) {
        this.props.onDelete();
    },
    /**
     * Create view for edit
    */
    createEditView() {
        let url = this.state.url;
        return (
            <div className="url-item url-item--edit">
                <input ref="urlInput" type="text" className="url-item__input"  value={url} onChange={this.onChange}  onKeyPress={this.onKeyPress} onClick={(e) => e.stopPropagation()} />
            </div>
        );
    },
    /**
     * Create view for delete
    */
    createDeleteView() {
        return (
            <div className="url-item url-item--delete">
               
                <span className="url-item__message">
                    Are you sure? 
                </span>
                    <button onClick={this.onDelete}>Yes</button>
                    <button onClick={() => this.setState({delete: false}) }>No</button>
            </div>
        );
    },
    /**
     * Create default view
    */
    createDefaultView() {
        return (
            <div className="url-item">
                <span className="url-item__text">{ this.state.url }</span>
                <button className="btnEdit" onClick={this.onEdit}>edit</button>
                <button className="btnDelete" onClick={this.onTryDelete}>delete</button>
            </div>
        );
    },
    /**
     * Render component
    */
    render() {
        let url  = this.state.url;
        let view;

        if(this.state.edit) {
            window.addEventListener('click', this.onEditClose, false);
            view = this.createEditView();
        }else if(this.state.delete){
            view = this.createDeleteView();
        }else {
            view = this.createDefaultView();
        }

        return (
            <div>
                { view }
            </div>
        );
    }
});



export default React.createClass({
    /**
     * Returns Initial State object 
     * @return {Object} 
     */
    getInitialState() {
        return {
            currentPage: 0
        };
    },
     /**
     * Update url Item 
     * @param {Number} index 
     * @param {String} url
     */
    onUpdate(index, url) {
        this.props.onUpdateUrlItem(index, url);
    },
    /**
     * Delete url Item 
     * @param {String} id 
     */
    onDelete(id) {
        this.props.onDeleteUrlItem(id);
    },
     /**
     * Change Page Number
     * @param {Number} pageNumber 
     */
    pageChange(pageNumber) {
        this.setState({
           currentPage: pageNumber - 1
        });
    },
    /**
     * Create urls based on current visible page
     * @param {Array} urls 
     */
    constructUrlItems(urls){
        return urls.map((urlItem, index) => {
            return (
                <li key={urlItem.id} className="url-list__item">
                    <UrlItem url={urlItem.url} onUpdate={this.onUpdate.bind(this, index)} onDelete={this.onDelete.bind(this, urlItem.id)} />
                </li>
            );
        });
    },
    /**
     * Render component
    */
    render() {
        let startPosition = this.state.currentPage * this.props.perPage;
        let finishPosition = startPosition + this.props.perPage;
        let urlsPage = this.props.urls.slice(startPosition, finishPosition);

        return (
            <div className="url-list-container">
                <ul className="url-list">
                    {this.constructUrlItems(urlsPage)}
                </ul>
                <Pagination perPage={this.props.perPage} total={this.props.urls.length} onPageChange={this.pageChange}/>
            </div>
        );
    }
});