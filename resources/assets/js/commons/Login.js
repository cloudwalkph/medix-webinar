import React, {Component} from 'react';

export default class Login extends Component {
	

	render() {
		return (
			<div className="section">
				<div className="row">
					<form className="col s10 offset-l1" id="loginForm">
						<div className="row">
							<div className="input-field col s12">
								<input id="userName" type="text" className="validate" name="email" />
								<label htmlFor="first_name">Username</label>
							</div>
							<div className="input-field col s12">
								<input id="password" type="text" className="validate" name="password" />
								<label htmlFor="first_name">Password</label>
							</div>
						</div>
					</form>
				</div>
			</div>
		)
	}
}