import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
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
                    <h1>This is the Links App</h1>
                    { this.props.children }
                </div>
    
            </div>   
        );
    }
});