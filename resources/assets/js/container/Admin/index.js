import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Content from './Content';

export default class Admin extends Component {

	render() {
		return(
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				<div>
					<Content />
				</div>
			</MuiThemeProvider>
		)
	}
}