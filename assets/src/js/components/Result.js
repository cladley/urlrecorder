import React      from 'react';
import { Link }   from 'react-router'
import store      from '../store/urlStore';


export default React.createClass({
    /**
     * Render component
    */
    render() {
        let urlItem = store.find(this.props.params.id);

        return (
            <div>
                <h1>Results Page</h1>
                <p>Thank you for your submission</p>
                <p>{urlItem.url}</p>
                
                <Link to="/">Back home</Link>
            </div>            
        );
    }
});