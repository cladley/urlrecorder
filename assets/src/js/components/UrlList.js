import React from 'react';
import ReactDOM from 'react-dom';


let UrlItem = React.createClass({
    getInitialState() {
        return {
            url: this.props.url,
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
        this.setState({
            edit: false
        });
        window.removeEventListener('click', this.onEditClose);
    },

    onChange(event) {
    
    },

    createEditView() {
        return (
            <div className="url-item url-item--edit">
                <input ref="urlInput" type="text" value={this.state.url} onChange={this.onChange}/>
            </div>
        );
    },
    createDeleteView() {

    },
    createDefaultView() {
        return (
            <div className="url-item">
                { this.state.url } 
                <button className="btnEdit" onClick={this.onEdit}>edit</button>
                <button className="btnDelete">delete</button>
            </div>
        );
    },


    render() {
        let url  = this.state.url;
        let view;

        if(this.state.edit) {
            window.addEventListener('click', this.onEditClose, false);
            view = this.createEditView();
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

    constructUrlItems(urls){
        return urls.map((urlItem, index) => {
            return (
                <li key={urlItem.id} className="url-list__item">
                    <UrlItem url={urlItem.url} />
                </li>
            );
        });
    },

    render() {
        return (
            <div className="url-list-container">
                <ul className="url-list">
                    {this.constructUrlItems(this.props.urls)}
                </ul>
            </div>
        );
    }
})