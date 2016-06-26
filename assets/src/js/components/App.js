import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
    render() {
        return ( 
            <div>
                <header>
                    <h3>Header</h3>
                    <Link to="/submit">Submit New Url</Link>
                </header>
                <h1>This is the Links App</h1>
                { this.props.children }
                <footer>Footer</footer>
            </div>   
        );
    }
});