import React   from 'react';
import utils   from '../utils/utils';

export default React.createClass({
    /**
     * Returns Initial State object 
     * @return {Object} 
     */
    getInitialState() {
        return {
            checkingUrl: false
        };
    },
    /**
     * Called on key press within text input
     * @param {event} event
    */
    onkeyPress(event) {
        if (event.key === 'Enter') {
            if(utils.isValidUrl(this.refs.inputUrl.value)){
                this.onSubmit();
            }
        }
    },
    /**
     * Called on submit of form
     * @param {event} event
    */
    onSubmit(event) {
        if(event) event.preventDefault();

        let url = this.refs.inputUrl.value;

        if(utils.isValidUrl(url)) {

            this.setState({
                checkingUrl: true,
                onError: false
            });

            utils.doesUrlExist(url, (request) => {
                if(request.success) { 
                    let urlItem = {
                        id: utils.uid(),
                        url: url
                    };
               
                    this.setState({
                        checkingUrl: false
                    });

                    if(this.refs.inputUrl) {
                        this.refs.inputUrl.value = "";
                    }

                    this.props.onSubmitUrl(urlItem);
                }else if(request.notfound) {
                    this.setState({
                        onError: true,
                        checkingUrl: false
                    });

                    setTimeout(() => {
                        this.setState({
                            onError: false
                        });
                    },1000);
                }else {
                    this.setState({
                        onError: false,
                        checkingUrl: false
                    });
                }
            });
        }
    },
    /**
     * Create form
     * @return {JSXComponent}
    */
    createForm() {
        return (
            <form className="create-url__form" onSubmit={this.onSubmit} ref="addForm">
                <input type="text" className="create-url__input"  ref="inputUrl" onKeyPress={this.onKeyPress} data-validate="required"/>
                <button type="submit">Add</button>
            </form>
        );
    },
    /**
     * Render component
    */
    render() {
        let view;

        if(this.state.checkingUrl) {
            view = <h3 >checking url...please wait</h3>;
        }else if(this.state.onError) {
            view = <h3 className="is-error">Sorry Url does not exist</h3>;
        }else {
            view = this.createForm();
        }


        return (
            <div className="create-url">
                <h5 className="create-url__title">Add a new url</h5>
                { view }
            </div>  
        );
    }
});


