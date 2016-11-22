var React = require('react');
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {Router, browserHistory} from 'react-router';
import Main from './container/Main';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

var App = React.createClass({
    getDefaultProps() {
        return {
            theme: getMuiTheme()
        };
    },
    getInitialState () {
        return {
            theme: this.props.theme
        };
    },
    render() {
        return(
            <MuiThemeProvider muiTheme={this.state.theme}>
                <Main />
            </MuiThemeProvider>
        )
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
