import React, {Component} from 'react';
import DatePicker from 'material-ui/DatePicker';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';


export default class SignUp extends Component {
	
	state = {
		styles : {
			radioButton : {
				width : '120px',
			},
			block : {
				display : 'flex'
			},
			radioLabel : {
				lineHeight : 0
			}
		}
	}

	render () {
		return (
			<div className="section">
				<div className="row">
					<form className="col s12" id="signUpForm">
						<div className="row">
							<div className="input-field col s6">
								<input id="first_name" type="text" className="validate" />
								<label htmlFor="first_name">First Name</label>
							</div>
							<div className="input-field col s6">
								<input id="last_name" type="text" className="validate" />
								<label htmlFor="last_name">Last Name</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6">
								<input id="email" type="email" className="validate" />
								<label htmlFor="email" data-error="Please input a correct email">Email</label>
							</div>
							<div className="input-field col s6">
								<input id="password" type="password" className="validate" />
								<label htmlFor="password">Password</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6">
								<DatePicker hintText="Birthday" />
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6">
								<RadioButtonGroup name="gender" defaultSelected="" style={this.state.styles.block}>
									<RadioButton
										value="1"
										label="Male"
										style={this.state.styles.radioButton}
										labelStyle={this.state.styles.radioLabel}
									/>
									<RadioButton
										value="0"
										label="Female"
										style={this.state.styles.radioButton}
										labelStyle={this.state.styles.radioLabel}
									/>
								</RadioButtonGroup>
							</div>
						</div>
					</form>
				</div>
			</div>
		)
	}

}