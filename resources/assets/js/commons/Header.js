import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import baseUrl from '../config';
import SignUp from './SignUp';
import axios from 'axios';
import Snackbar from 'material-ui/Snackbar';

export default class Header extends Component {

	state = {
		items : ['hello', 'world', 'click', 'me'],
		disableButton : false,
		openModal : false,
		open : false,
		snackMessage : '',
		snackDuration : 4000,
		buttonLabel : 'Send'
	}

    handleSubmitForm = (e) => {
  
        let url = baseUrl.apiUrl + 'user';
        let formData = $('#signUpFormReg').serialize();
        
        this.setState({
            disableButton : true,
            buttonLabel : 'Sending...'
        });
        
        if(this.formValidation() == 0)
        {
        	this.setState({
	            disableButton : false
	        });
            return;
        }
        
        axios.post(url, formData).then((res) => {
            this.setState({
                disableButton : false,
                snackMessage : 'Please check your email to verify your account. Thank you!',
                open : true,
                snackDuration : 10000,
                buttonLabel : 'Send'
            });
        }).catch((error) => {
            this.setState({
                open : true,
                disableButton : false,
                snackMessage : 'Email Already Exist!',
                snackDuration : 4000,
                buttonLabel : 'Send'
            });
        });
    }

    formValidation = () => {

    	if(!$('#signUpFormReg')[0].email.value)
        {
        	$('#signUpFormReg')[0].email.focus();

            return 0;
        }

        if(!$('#signUpFormReg')[0].first_name.value)
        {
        	$('#signUpFormReg')[0].first_name.focus();
            return 0;
        }
        
        if(!$('#signUpFormReg')[0].last_name.value)
        {
        	$('#signUpFormReg')[0].last_name.focus();
            return 0;
        }

        return 1;
    }

    handleSignUpButton = (e) => {
       	$('#modalUserRegistration').modal('open');
    }

    handleRequestClose = () => {
    	this.setState({
    		open : false
    	})
    }

	componentDidMount() {
		
	}

	render() {

        let user = JSON.parse(sessionStorage.getItem('access'));

		return (
			<div className="section valign-wrapper" style={{height : '90vh'}}>
				<div className="container">
					<br />
					<h4 className="header center">ONLINE COURSES FOR <span style={{ fontFamily: 'Oxygen', fontWeight: 'bold', color: '#1b584c' }}>CONTINUING EDUCATION</span></h4>

					<div className="row center">
						<div className="col s8 offset-s2">
							<h6 style={{ fontFamily: 'Source Sans Pro',fontSize: '16px', lineHeight : '1.6rem'}}>
								Dental Access Webinar is an upstart technology platform that aims to deliver continuing dental education for all dentists that is easily accessible through the world-wide web. It provides an 
                                alternative venue where Dentists would interact with each other and share basic and advanced knowledge in their field of specializations
							</h6>
						</div>
					</div>
                {user ? 
                    null

                    :

                    <div className="row center">
                        <a href="#" id="download-button" className="btn-large waves-effect waves-light indigo darken-4" onClick={this.handleSignUpButton}>REGISTER HERE</a>
                    </div>
                }
					
				</div>
                
                <div id="modalUserRegistration" className="modal">
                	<div className="modal-content">
                		<div className="row">
                			<SignUp />
                		</div>
                	</div>  
                	<div className="modal-footer">
                		<button 
                            className={this.state.disableButton ? 'waves-effect waves-green btn-flat disabled' : 'waves-effect waves-green btn-flat'} 
                            onClick={this.handleSubmitForm}>{this.state.buttonLabel}</button>
                	</div>
                </div>

                <Snackbar
					open={this.state.open}
					message={this.state.snackMessage}
					autoHideDuration={this.state.snackDuration}
					onRequestClose={this.handleRequestClose}
		        />

			</div>
		)
	}
}
