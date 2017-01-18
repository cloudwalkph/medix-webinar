import React, {Component} from 'react';
import Video from '../../components/Live/Video';
import {userSession} from '../../session';
import baseUrl from '../../config';
import axios from 'axios';

export default class Content extends Component {

	state = {
		isSending : false,
		textArea : ''
	}

	handleSubmit = (e) => {
		e.preventDefault();
		let formData = $('#askQuestionForm').serializeArray();
		let userId = userSession.data.user.id;
		let courseId = this.props.params.courseId;
		formData.push({name: 'user_id', value : userId});
		formData.push({name: 'course_id', value : courseId});
		
		this.postApiMessage(formData);
	}

	postApiMessage = (formData) => {

		this.setState({
			isSending : true
		})

		let url = baseUrl.apiUrl + 'message';
		axios.post(url,$.param(formData)).then((res) => {
			this.setState({
				isSending : false,
				textArea : ''
			})
		}).catch((error) => {
			console.log(error);
			this.setState({
				isSending : false,
				textArea : ''
			})
		})
	}

	render() {
		return(
			<div className="container">
				<div className="section">
					<div className="container">
						<Video />
						<div className="section">
							<div className="row">
								<form id="askQuestionForm" className="col s12" onSubmit={this.handleSubmit}>
									<div className="input-field col s12">
										<textarea id="chatboxTextarea" rows="4" name="message" className="materialize-textarea" value={this.state.textArea} onChange={(e) => {this.setState({textArea : e.target.value})}} required></textarea>
										<label htmlFor="chatboxTextarea">Ask a question</label>
									</div>
									<div className="input-field col s12">
									{this.state.isSending ?

										<button className="btn waves-effect waves-light right indigo darken-3 disabled" type="button">
											Sending
										    <i className="material-icons right">send</i>
										</button>

										:

										<button className="btn waves-effect waves-light right indigo darken-3" type="submit">
											Submit
										    <i className="material-icons right">send</i>
										</button>
									}
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}