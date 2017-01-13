import React, {Component} from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

export default class Content extends Component {

	render() {
		return(
			<div className="row">
				<Login/>
			</div>
		)
	}
}