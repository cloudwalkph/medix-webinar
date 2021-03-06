import React , { Component } from 'react';
import Readmore from '../../commons/Readmore';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import baseUrl from '../../config';
import axios from 'axios';
import Dialog from 'material-ui/Dialog';
import { browserHistory } from 'react-router';
import moment from 'moment';
import Countdown from 'react-cntdwn';
import Snackbar from 'material-ui/Snackbar';


export default class Courses extends Component {
	
	state = {
		openRegistration : false,
		disableButton : false,
		data : [],
		hasCourse : false,
		showFieldsContent : false,
		styles : {
			linkList : {
				padding : '20px 0'
			},
			linkFont : {
				fontSize : '25px'
			},
			imgProfile : {
			    display: 'inline-flex',
			    alignItems: 'center',
			    justifyContent: 'center',
			    borderRadius: '50%',
			    height: '100px',
			    width: '100px',
			    position: 'absolute',
			    top: '8px',
			    left: '16px'
			},
			profileDiv : {
				padding : '40px 56px 40px 150px', 
				position : 'relative'
			},
			profileContent : {
				fontSize: '24px'
			}
		},
		countDownStart : true,
		openSnackbarMessage : false
	}

	setUserSession = (data) => {
		sessionStorage.setItem('access', JSON.stringify(data))
	}

	handleRegistrationForm = (e) => {
		e.preventDefault();
	}

	getApiCourses = () => {
		
		let url = baseUrl.apiUrl + 'course/' + this.props.params.courseId;
		
		axios.get(url).then((res) => {
			
            this.setState({
            	data : res.data
            })
        }).catch((error) => {
            
        });
		
	}

	handleCourseRegistration = (e) => {
		e.preventDefault();
		$('#modalVisitorRegistration').modal('open');
	}

	handleGotoCourse = () => {
		this.courseRegistration();
	}

	handleUser = () => {
		let url = baseUrl.apiUrl + 'userCheck';
		let form = $('#registrationVisitorForm');
		let email = form[0].email.value;
		let courseId = this.props.params.courseId;
		if(!email)
		{
			form[0].email.focus();
			return
		}
		let data = {
			email : email,
			course_id : courseId
		};

		this.setState({
			disableButton : true
		});

		axios.post(url, data).then((res) => {
			this.setUserSession(res);
            this.setState({
				hasCourse : true,
				disableButton : false
			},() => {
				$('#modalVisitorRegistration').modal('close');
			});
			
        }).catch((error) => {
        	console.log(error)
            this.setState({
                showFieldsContent : true,
                disableButton : false
            });
        })

	}

	courseRegistration = () => {
		let url = baseUrl.apiUrl + 'visitor';
        //let url = 'http://192.168.1.52:8000/api/v1/visitor';
		let courseId = this.props.params.courseId;
        let form = $('#registrationVisitorForm');
		let formData = form.serializeArray();

		formData.push({
			name: 'course_id',
			value: courseId
		});

        if(this.formValidation(form) == 0) //validation
        {
            return;
        }

		this.setState({
            disableButton : true
        });
		
		axios.post(url, $.param(formData)).then((res) => {
			this.setUserSession(res);
            this.setState({
				openRegistration : false,
				disableButton : false,
				openSnackbarMessage : true,
				showFieldsContent : false
			});
			$('#modalVisitorRegistration').modal('close');
        }).catch((error) => {
            this.setState({
                disableButton : false
            });
        })
	}

    formValidation = (form) => {
        if(!form[0].email.value)
        {
            form[0].email.focus();
            return 0;
        }
        if(!form[0].first_name.value)
        {
            form[0].first_name.focus();
            return 0;
        }
        if(!form[0].last_name.value)
        {
            form[0].last_name.focus();
            return 0;
        }

        return 1;
    }
   

	handleProceedToCourse = () => {
        if(!this.state.countDownStart)
        {
            let courseId = this.props.params.courseId;
            window.location.href = window.location.origin + '/video/' + courseId;
            // browserHistory.push('/video/' + courseId);    
            return;
        }
        alert('This webinar will start soon');
		
	}

	handleFinished = () => {
		this.setState({
			countDownStart : false
		});
	}

    handlerVisitor = () => {
        let session = JSON.parse(sessionStorage.getItem('access'));

        if(this.props.location.query.uid)
        {
            let url = baseUrl.apiUrl + 'user/' + this.props.location.query.uid
            axios.get(url).then((res) => {
                
                this.setUserSession(res);
                
                for (var i = 0; i < res.data.courses.length; i++) {
                    if(res.data.courses[i].id == this.props.params.courseId)
                    {
                        this.setState({
                            hasCourse : true
                        });
                    }
                } 
            }).catch((error) => {
                console.log(error);
            });

            return;
        }

        if(session)
        {
        	for(var e = 0; e < session.courses.length; e++) {
	            if(session.courses[e].id == this.props.params.courseId)
	            {
	                this.setState({
	                    hasCourse : true
	                });
	            }
	        }	
        }
        

    }

    handleRequestCloseSnackbar = () => {
        this.setState({
            openSnackbarMessage : false
        })
    }

	componentDidMount () {
        $('.parallax').parallax();
        $('.scrollspy').scrollSpy();

        $('body').scrollTop(0);

        this.getApiCourses();

        this.handlerVisitor();
    }

	render() {
		
		let startEnrollButton = <button className="btn waves-effect waves-light indigo darken-3" onClick={this.handleCourseRegistration}>Enroll Now</button>;
		let hasCourse = this.state.hasCourse;

		if(hasCourse)
		{
			startEnrollButton = <button className="btn waves-effect waves-light indigo darken-3" onClick={this.handleProceedToCourse}>Start</button>;
		}
		
		return (
			<div>

                <div className="row valign-wrapper">
                    <div className="col l5">
	                    <div className="row">
	                    	{this.props.params.courseId == 1 ?
	                        	<img className="responsive-img" src={window.location.origin + '/img/Courses/pajards.png'} />
		                        :
		                        <img className="responsive-img" src={window.location.origin + '/img/Courses/johanna.jpg'} />
		                    }	
                        </div>
                    </div>
                    <div className="col l6 offset-l1">
	                    <div className="row">
	                    	<div className="col l7">
	                    		<h3>COURSE PAGE</h3>
	                    		<h4>
		                        	{this.state.data.title}
		                        </h4>
		                        <p className="webinarDescription">
		                            {this.state.data.description}
		                        </p>
		                        {this.props.params.courseId == 1 ?
		                        	<div>
			                        	<h6 style={{color: '#4444ff'}}>LEARNING OBJECTIVES:</h6>
										<ul className="browser-default webinarDescription">
											<li>Review the basic fundamentals of Temporization.</li>
			                            	<li>Revisit the classic techniques of Temporization.</li>
			                            	<li>Introduce innovations in techniques to create an easy work flow to the clinician and the patient.</li>
										</ul>
									</div>
									:
									null
		                        }
		                        
	                    	</div>
	                    </div>
	                    <div className="row">
	                    	{this.state.countDownStart ? 
		                    	<Countdown targetDate={this.state.data.start}
						           format={{
						           	 	day : 'DD',
										hour: 'HH',
										minute: 'MM',
										second: 'SS'
									}}
						           interval={1000}
						           timeSeparator={' : '}
						           leadingZero 
						           onFinished={this.handleFinished} />
						        :
						        null   
					        }
	                    </div>
	                    <div className="row">
	                    	<div className="col m12 l12 s12">
	                    	{startEnrollButton}
	                    	</div>
	                    </div>
                    </div>
                    
                </div>

                <div className="section">

                    <div className="row">
                        <div className="col s12 m8 l8 offset-m2 offset-l2">
	                        <div className="container">
	                            <div id="introduction" className="section scrollspy">
	                            	<div className="section">
	                            		<div style={this.state.styles.profileDiv}>
	                            			{this.props.params.courseId == 1 ?
		                            			<img src={window.location.origin + '/img/Courses/pajards.png'} style={this.state.styles.imgProfile}/>
		                            			:
	                            				<img src={window.location.origin + '/img/Courses/johanna.jpg'} style={this.state.styles.imgProfile}/>
	                            			}
	                            			<div style={this.state.styles.profileContent}>
	                            				<strong>Professor:</strong><span className="webinarDescription">{this.props.params.courseId == 1 ? ' Dr. Kimberly Ray R. Fajardo' : ' Dr. Johanna Rosette Po'}</span>
	                            			</div>
	                            		</div>
	                            	</div>
	                            	<Readmore {...this.props} />

	                            </div>

	                            <div className="section">
	                            	<h5>Title : <span className="grey-text">{this.state.data.title}</span></h5>
	                            </div>

	                            <div className="section">
	                                <h5>Time : <span className="grey-text">{moment(this.state.data.start).format('hh:mm A') + ' - ' + moment(this.state.data.end).format('hh:mm A') + ' (' + moment(this.state.data.end).format('dddd') + ')'}</span></h5>
	                            </div>

	                            <div className="section">
	                                <h5>Duration : <span className="grey-text">1 Hour</span></h5>
	                            </div>

	                            <div className="section">
	                                <h5>Language : <span className="grey-text">{this.state.data.language}</span></h5>
	                            </div>

	                            <div className="section">
	                                <h5>Price : <span className="grey-text">{this.state.data.price <= 0 ? 'Free' : null}</span></h5>
	                            </div>

	                            <div className="section"><div className="divider"></div></div>
	                       

	                        </div>
                        </div>
                        
                    </div>
                    {/*<div className="row">
                    	<div className="container">
                    		<div className="section">
                    			<h4>RELATED COURSES</h4>
                    		</div>
                    		<div className="section">
	                    		<div className="col m4">
		                    		<Card>
		                    			<CardMedia overlay={<CardTitle title="December" subtitle="23" />}>
		                    				<img src="img/bigstock-x-ray-photo-of-teeth-Dental-e-64462231.jpg"/>
		                    			</CardMedia>
		                    			<CardTitle title="Oral and Maxillofacial" />
										<CardActions>
											<FlatButton label="Pierre Fauchard" /><FlatButton label="1,265 comments" />
										</CardActions>
		                    		</Card>
	                    		</div>
	                    		<div className="col m4">
		                    		<Card>
		                    			<CardMedia overlay={<CardTitle title="December" subtitle="23" />}>
		                    				<img src="img/endodontics.jpg"/>
		                    			</CardMedia>
		                    			<CardTitle title="Oral and Maxillofacial" />
										<CardActions>
											<FlatButton label="Pierre Fauchard" /><FlatButton label="1,265 comments" />
										</CardActions>
		                    		</Card>
	                    		</div>
	                    		<div className="col m4">
		                    		<Card>
		                    			<CardMedia overlay={<CardTitle title="December" subtitle="23" />}>
		                    				<img src="img/bigstock-x-ray-photo-of-teeth-Dental-e-64462231.jpg"/>
		                    			</CardMedia>
		                    			<CardTitle title="Oral and Maxillofacial" />
										<CardActions>
											<FlatButton label="Pierre Fauchard" /><FlatButton label="1,265 comments" />
										</CardActions>
		                    		</Card>
	                    		</div>
                    		</div>
                    	</div>
                    </div>*/}

                </div>

                <div id="modalVisitorRegistration" className="modal">
                	<div className="modal-content">
                		<div className="row">
	    					<form className="col s12" id="registrationVisitorForm" onSubmit={this.handleRegistrationForm}>
	    						<div className="row">
	    							<div className="input-field col s12">
	    								<input name="email" type="email" id="emailRegister" className="validate" />
	    								<label htmlFor="emailRegister">Email*</label>
	    							</div>
	    							{this.state.showFieldsContent ?
	    								<div>
			    							<div className="input-field col s12">
			    								<input name="first_name" type="text" id="firstNameRegister" className="validate" />
			    								<label htmlFor="firstNameRegister">First Name*</label>
			    							</div>
			    							<div className="input-field col s12">
			    								<input name="last_name" type="text" id="lastNameRegister" className="validate" />
			    								<label htmlFor="lastNameRegister">Last Name*</label>
			    							</div>
			    							<div className="input-field col s12">
			    								<input name="company" type="text" id="companyRegister" className="validate" />
			    								<label htmlFor="companyRegister">Company</label>
			    							</div>
			    							<div className="input-field col s12">
			    								<input name="job" type="text" id="jobRegister" className="validate" />
			    								<label htmlFor="jobRegister">Title/Job</label>
			    							</div>
		    							</div>
	    								:
	    								null
	    								
	    							}
	    						</div>
	    					</form>
	    				</div>
                	</div>
                	<div className="modal-footer">
                		{this.state.showFieldsContent ? 
                			<button 
	                            className={this.state.disableButton ? 'waves-effect waves-green btn-flat disabled' : 'waves-effect waves-green btn-flat'} 
	                            onClick={this.handleGotoCourse}>Send</button>
	                        :
	                        <button 
	                            className={this.state.disableButton ? 'waves-effect waves-green btn-flat disabled' : 'waves-effect waves-green btn-flat'} 
	                            onClick={this.handleUser}>Send</button>
                		}
                		
                	</div>
                </div>

                <Snackbar
                    open={this.state.openSnackbarMessage}
                    message="Thank you for signing up! Please check your email and click on the link we sent to confirm your registration. Thank you!"
                    autoHideDuration={5000}
                    onRequestClose={this.handleRequestCloseSnackbar}
                />

            </div>
		)
	}
}