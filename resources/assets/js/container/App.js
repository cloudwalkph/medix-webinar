import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const {Grid, Row, Col} = require('react-flexbox-grid');

const {AppBar} = require('material-ui');

export default class App extends Component {
	
    render() {
		return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
		)
	}
}