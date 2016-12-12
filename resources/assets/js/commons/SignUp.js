import React, {Component} from 'react';
import DatePicker from 'material-ui/DatePicker';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import moment from 'moment';


export default class SignUp extends Component {
	
	state = {
		birthdate : '',
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

	handleChange = (event, date) => {
		this.setState({
			birthdate : moment(date).format('YYYY-MM-DD')
		})
	}

	render () {
		return (
			<div className="section">
				<div className="row">
					<form className="col s12" id="signUpForm">
						<div className="row">
							<div className="input-field col s6">
								<input id="first_name" type="text" className="validate" name="first_name" />
								<label htmlFor="first_name">First Name</label>
							</div>
							<div className="input-field col s6">
								<input id="last_name" type="text" className="validate" name="last_name" />
								<label htmlFor="last_name">Last Name</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6">
								<input id="email" type="email" className="validate" name="email" />
								<label htmlFor="email" data-error="Please input a correct email">Email</label>
							</div>
							<div className="input-field col s6">
								<input id="password" type="password" name="password" className="validate" />
								<label htmlFor="password">Password</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6">
								<input type="hidden" name="birthdate" value={this.state.birthdate}/>
								<DatePicker 
									hintText="Birthday" 
									className="birthdate" 
									autoOk={true}
									onChange={this.handleChange} />
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