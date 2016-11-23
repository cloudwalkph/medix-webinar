var React = require('react');
import ReactDOM from 'react-dom';

import {Router, browserHistory} from 'react-router';
import route from './router';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

var App = React.createClass({
    render() {
        return(
            <Router history={browserHistory}>
                {route}
            </Router>
        )
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
