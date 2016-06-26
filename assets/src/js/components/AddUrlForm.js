import React   from 'react';
import utils   from '../utils/utils';

export default React.createClass({

    

    onkeyPress(event) {
        if (event.key === 'Enter') {
            if(utils.isValidUrl(this.refs.inputUrl.value)){
                this.onSubmit();
            }
        }
    },

    onSubmit(event) {
        if(event) event.preventDefault();

        let url = this.refs.inputUrl.value;

        if(utils.isValidUrl(url)) {

            this.refs.inputUrl.value = "";
            let urlItem = {
                id: utils.uid(),
                url: url
            };

            this.props.onSubmitUrl(urlItem);
        }
    },

    render() {
        return (
            <div className="create-url">
                <h5>Add a new one</h5>
                <form className="create-url__form" onSubmit={this.onSubmit} ref="addForm">
                    <input type="text" ref="inputUrl" onKeyPress={this.onKeyPress} data-validate="required"/>
                    <button type="submit">Add</button>
                </form>

            </div>  
        );
    }
});


