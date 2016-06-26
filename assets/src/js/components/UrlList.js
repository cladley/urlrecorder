import React      from 'react';
import ReactDOM   from 'react-dom';
import Pagination from './Pagination';
import utils      from '../utils/utils';

let UrlItem = React.createClass({
    getInitialState() {
        return {
            url: this.props.url,
            initialUrl: this.props.url,
            edit: false,
            delete: false
        };
    },
    componentDidUpdate(){
        var input = ReactDOM.findDOMNode(this.refs.urlInput);
        if(input){
            input.focus();
        }
    },
    onEdit(event) {
        event.stopPropagation();

        this.setState({
            edit: true
        });
    },

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

    onChange(event) {
        this.setState({
            url: event.target.value
        });
    },
    onKeyPress(event) {
        if (event.key === 'Enter') {

            // if(utils.isValidUrl(event.target.value)){
               
            //     this.setState({
            //         url: event.target.value,
            //         initialUrl: event.target.value
            //     });

            //     this.props.onUpdate(event.target.value);
            // }else {
            //     this.setState({
            //         url: this.state.initialUrl
            //     });
            // }

            this.onEditClose();
        }
    },
    onTryDelete(event) {
        this.setState({
            delete: true
        });
    },
    onDelete(event) {
        this.props.onDelete();
    },

    createEditView() {
        let url = this.state.url;
        return (
            <div className="url-item url-item--edit">
                <input ref="urlInput" type="text"  value={url} onChange={this.onChange}  onKeyPress={this.onKeyPress} onClick={(e) => e.stopPropagation()} />
            </div>
        );
    },
    createDeleteView() {
        return (
            <div className="url-item url-item--delete">
                <span>{ this.state.url }</span>
                <span>
                    Are you sure? 
                    <button onClick={this.onDelete}>Yes</button>
                    <button onClick={() => this.setState({delete: false}) }>No</button>
                </span>
            </div>
        );
    },
    createDefaultView() {
        return (
            <div className="url-item">
                { this.state.url } 
                <button className="btnEdit" onClick={this.onEdit}>edit</button>
                <button className="btnDelete" onClick={this.onTryDelete}>delete</button>
            </div>
        );
    },


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
    getInitialState() {
        return {
            currentPage: 0
        };
    },

    onUpdate(index, url) {
        this.props.onUpdateUrlItem(index, url);
    },

    onDelete(id) {
        this.props.onDeleteUrlItem(id);
    },

    pageChange(pageNumber) {
        this.setState({
           currentPage: pageNumber - 1
        });
    },

    constructUrlItems(urls){
        return urls.map((urlItem, index) => {
            return (
                <li key={urlItem.id} className="url-list__item">
                    <UrlItem url={urlItem.url} onUpdate={this.onUpdate.bind(this, index)} onDelete={this.onDelete.bind(this, urlItem.id)} />
                </li>
            );
        });
    },

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
})