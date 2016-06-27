import React              from 'react';
import { browserHistory } from 'react-router'
import AddUrlForm         from './AddUrlForm';
import store              from '../store/urlStore';

export default React.createClass({
    
    onSubmitUrlItem(urlItem) {
        let data = store.get();
        data = [urlItem].concat(data);
        store.save(data);
        browserHistory.push('/result/' + urlItem.id);
    },
    /**
     * Render component
    */
    render() {
        return (
            <div>
                <AddUrlForm onSubmitUrl={this.onSubmitUrlItem} />
            </div>
        );
    }
});