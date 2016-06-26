import React      from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App        from './assets/src/js/components/App';
import Overview   from './assets/src/js/components/Overview';
import Submit     from './assets/src/js/components/Submit';


render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Overview} />
            <Route path="/submit" component={Submit} />
        </Route>
    </Router>
    , document.getElementById('app'));
