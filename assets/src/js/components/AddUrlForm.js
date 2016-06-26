import React   from 'react';
import utils   from '../utils/utils';


export default React.createClass({

    onSubmit(event) {
        event.preventDefault();

        let url = this.refs.inputUrl.value;
        this.refs.inputUrl.value = "";
        let urlItem = {
            id: utils.uid(),
            url: url
        };

        this.props.onSubmitUrl(urlItem);
    },

    render() {
        return (
            <div className="create-url">
                <h5>Add a new one</h5>
                <form className="create-url__form" onSubmit={this.onSubmit}>
                    <input type="text" ref="inputUrl" />
                    <button type="submit">Add</button>
                </form>

            </div>  
        );
    }
});


