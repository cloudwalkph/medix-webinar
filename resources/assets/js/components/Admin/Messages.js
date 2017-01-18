import React, {Component} from 'react';

export default class Messages extends Component {

	render() {
		return(
			<li className="collection-item avatar">
				
				<span className="title">{this.props.data.user.first_name + ' ' + this.props.data.user.last_name}</span>
				<p>{this.props.data.message}</p>
			</li>
		)
	}
}