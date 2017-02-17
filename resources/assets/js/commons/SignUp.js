import React, {Component} from 'react';
// import DatePicker from 'material-ui/DatePicker';
import DatePicker from './DatePicker';
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
			<form className="col s12" id="signUpFormReg">
				<div className="row">
					<div className="input-field col s12">
						<input name="email" type="email" id="emailUser" className="validate" />
						<label htmlFor="emailUser">Email*</label>
					</div>
					<div className="input-field col s12">
						<input name="first_name" type="text" id="firstNameUser" className="validate" />
						<label htmlFor="firstNameUser">First Name*</label>
					</div>
					<div className="input-field col s12">
						<input name="last_name" type="text" id="lastNameUser" className="validate" />
						<label htmlFor="lastNameUser">Last Name*</label>
					</div>
					<div className="input-field col s12">
						<input name="company" type="text" id="companyUser" className="validate" />
						<label htmlFor="companyUser">Company</label>
					</div>
					<div className="input-field col s12">
						<input name="job" type="text" id="jobUser" className="validate" />
						<label htmlFor="jobUser">Title/Job</label>
					</div>
				</div>
			</form>
		)
	}

}