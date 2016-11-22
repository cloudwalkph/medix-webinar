import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './Main';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

var App = React.createClass({
  render() {
    return(
      <MuiThemeProvider>
        <Main />
      </MuiThemeProvider>
    )
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
