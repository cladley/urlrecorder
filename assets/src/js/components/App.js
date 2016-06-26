import React from 'react';

export default React.createClass({
    render() {
        return ( 
            <div>
                <header>header</header>
                <h1>This is the Links App</h1>
                { this.props.children }
                <footer>Footer</footer>
            </div>   
        );
    }
});