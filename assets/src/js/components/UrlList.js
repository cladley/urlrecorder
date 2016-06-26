import React from 'react';
import ReactDOM from 'react-dom';


let UrlItem = React.createClass({
    getInitialState() {
        return {
            url: this.props.url
        };
    },

    render() {
        let url  = this.state.url;
        let view = <div className="url-item">{ url }</div>;


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