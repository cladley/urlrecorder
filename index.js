import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router';
import App from './assets/src/js/components/App';

render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        </Route>
    </Router>
    , document.getElementById('app'));
