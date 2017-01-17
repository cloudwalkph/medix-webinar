import React, {Component} from 'react';
import LiveChat from './LiveChat';
import Messages from './Messages';
import baseUrl from '../../config';
import axios from 'axios';

export default class ChatBox extends Component {

	state = {
		listLiveChat : [],
		listOfMessages : []
	}

	getApiLiveChat = () => {
		let url = baseUrl.apiUrl + 'course/1/messages';
		
		axios.get(url).then((res) => {
			this.setState({
				listLiveChat : res.data
			});
		}).catch((error) => {
			console.log(error);
		});
	}

	getApiMessages = () => {
		alert('asd');
	}

	handleSelectMessage = (id) => {
		let data = this.state.listLiveChat;
		let index = data.findIndex((item) => item.id == id);
		let messages = this.state.listOfMessages;
			
		messages.unshift(data[index]); // set to message
		data.splice(index, 1); // remove from live chat
		
		this.setState({
			listLiveChat : data,
			listOfMessages : messages
		});


		this.postApiMessages(id);
	}

	postApiMessages = (id) => {
		alert(id)
	}

	componentDidMount() {
		this.getApiLiveChat();
	}

	render() {
		console.log(this.state.listOfMessages)
		return(
			<div className="section">
            	<div className="container">
            		<div className="row">
            			<div className="col s6">
            				<h4>Live Chat</h4>
            				<div className="chatBox">
            					<ul className="collection">
	            					{this.state.listLiveChat.map((item, i) => {
	            						return <LiveChat data={item} key={i} index={i} onSelectMessage={this.handleSelectMessage} />
	            					})}
            					</ul>
            				</div>
            			</div>
            			<div className="col s6">
            				<h4>Messages</h4>
            				<div className="chatBox">
            					<ul className="collection">
            					{this.state.listOfMessages.map((item, i) => {
            						return <Messages data={item} key={i} index={i}/>
            					})}
            					</ul>
            				</div>
            			</div>
            		</div>
            	</div>
            </div>
		)
	}
}