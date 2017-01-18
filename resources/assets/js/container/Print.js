import React, {Component} from 'react';
import baseUrl from '../config';
import axios from 'axios';
import Messages from '../components/admin/Messages';

export default class Print extends Component {

	state = {
		listOfMessages : []
	}

	getApiMessages = () => {
		let url = baseUrl.apiUrl + 'course/1/messages?flag=1';

		axios.get(url).then((res) => {
			this.setState({
				listOfMessages : res.data
			});
		}).catch((error) => {
			console.log(error);
		})
	}

	componentDidMount() {
		this.getApiMessages();
	}

	render() {
		return(
			<div className="section">
				<ul className="collection">
				{this.state.listOfMessages.map((item, i) => {
					return <Messages data={item} key={i} index={i}/>
				})}
				</ul>
			</div>
		)
	}
}