import React              from 'react';
import { browserHistory } from 'react-router'
import AddUrlForm         from './AddUrlForm';
import store              from '../store/urlStore';

export default React.createClass({
    
    onSubmitUrlItem(urlItem) {
        let data = store.get();
        data = data.concat([urlItem]);
        store.save(data);
        browserHistory.push('/result/' + urlItem.id);
    },
    
    render() {
        return (
            <div>
                <AddUrlForm onSubmitUrl={this.onSubmitUrlItem} />
            </div>
        );
    }
});