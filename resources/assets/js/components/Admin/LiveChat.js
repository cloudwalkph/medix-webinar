import React, {Component} from 'react';

export default class LiveChat extends Component {

	state = {

	}

	handleSubmitMessage = (e) => {
		this.props.onSelectMessage(this.props.data.id);
	}

	componentDidMount() {

	}

	render() {
		return (
			<li className="collection-item avatar">
				
				<span className="title">{this.props.data.user.first_name + ' ' + this.props.data.user.last_name}</span>
				<p>{this.props.data.message}</p>
				<a href="#!" className="secondary-content" onClick={this.handleSubmitMessage}><i className="material-icons">send</i></a>
			</li>
		)
	}
}