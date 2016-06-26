import React from 'react';

export default React.createClass({
    render() {
        return ( 
            <div>
                <h1>This is the App - Header</h1>
                { this.props.children }
            </div>   
        );
    }
})