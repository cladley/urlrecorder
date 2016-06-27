import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
    /**
     * Render component
    */
    render() {
        return ( 
            <div>
                <header className="header">
                    <div className="container">
                        <h3 className="header__title">Url Recorder</h3>
                        <Link to="/submit" className="header__link">Submit New Url</Link>
                    </div>
                </header>
                <div className="container">
                    { this.props.children }
                </div>
            </div>   
        );
    }
});