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


export default class Courses extends Component {
	
	state = {
		openRegistration : false,
		disableButton : false,
		data : [],
		hasCourse : false,
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
		countDown : ''
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
		$('#modalVisitorRegistration').modal('open');
	}

	handleGotoCourse = () => {
		this.courseRegistration();
	}

	courseRegistration = () => {
		//let url = baseUrl.apiUrl + 'visitor';
        let url = 'http://192.168.1.52:8000/api/v1/visitor';
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
            this.setState({
				openRegistration : false,
				hasCourse : true,
				disableButton : false
			});
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
		let courseId = this.props.params.courseId;
		window.location.href = window.location.origin + '/video/' + courseId;
		// browserHistory.push('/video/' + courseId);
	}

	countTimer = () => {
		setInterval(() => {
			let now  = moment();
			let releaseDate = moment(this.state.data.start);

			let day = moment.utc(moment(releaseDate,"YYYY-MM-DD HH:mm:ss").diff(moment(now,"YYYY-MM-DD HH:mm:ss"))).format("DD");
			let hours = moment.utc(moment(releaseDate,"YYYY-MM-DD HH:mm:ss").diff(moment(now,"YYYY-MM-DD HH:mm:ss"))).format("HH");
			let minutes = moment.utc(moment(releaseDate,"YYYY-MM-DD HH:mm:ss").diff(moment(now,"YYYY-MM-DD HH:mm:ss"))).format("mm");
			let seconds = moment.utc(moment(releaseDate,"YYYY-MM-DD HH:mm:ss").diff(moment(now,"YYYY-MM-DD HH:mm:ss"))).format("ss");
			let timer = <div className="col s12 l12 m12"> 
							<div className="divTime">
								<span className="spanTime">{day}</span><small className="spanLabel"> Days </small>
							</div>
							<div className="divTime">
								<span className="spanTime">{hours}</span> <small className="spanLabel"> Hours </small>
							</div>
							<div className="divTime">
								<span className="spanTime">{minutes}</span> <small className="spanLabel"> Minutes </small>
							</div>
							<div className="divTime">
								<span className="spanTime">{seconds}</span> <small className="spanLabel"> Seconds </small>
							</div>
						</div>;
			if(now > releaseDate)
			{
				timer = "";
			}
			this.setState({
				countDown : timer
			});
		},1000);

		return;
	}

	handleClose = () => {
		this.setState({
			openRegistration: false
		})
	}

	componentDidMount () {
        $('.parallax').parallax();
        $('.scrollspy').scrollSpy();

        $('body').scrollTop(0);

        this.getApiCourses();

        this.countTimer();
    }

	render() {
		
		let session = sessionStorage.getItem('access');
		let courses = this.state.data.courses;
		let startEnrollButton = <button className="btn waves-effect waves-light indigo darken-3" onClick={this.handleCourseRegistration}>Enroll Now</button>;
		let hasCourse = this.state.hasCourse;
		
		if(courses)
		{
			for (var i = 0; i < courses.length; i++) {
			    if(courses[i].id == this.props.params.courseId)
			    {
			    	hasCourse = true;
			    }
			}	
		}

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
	                    	{this.state.countDown}
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
	                            				<strong>Professor:</strong><span className="webinarDescription">{this.props.params.courseId == 1 ? ' Dr. Kimberly Ray R. Fajardo' : ' Dr. Johanna Rosette'}</span>
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
	                            {/*<div className="section scrollspy" id="syllabus">
	                            	<h5>Syllabus</h5>
	                            	<h5 className="grey-text">Week 1</h5>
	                            </div>

	                            <div className="section">
	                            	<p className="grey-text">
	                            		God, you are a God. I will earnesty seek you. My soul thirsts for you. My flesh longs for you, in
	                            		a dry and weary land, where there is no water. So i have seen you in the sanctuary, watching your 
	                            		power and your glory.
	                            	</p>
	                            </div>

	                            <div className="section">
	                            	<span className="grey-text">5 Articles / 2 Videos</span>
	                            </div>

	                            <div className="section">
									<List>
										<ListItem primaryText="Video : Welcome to Class - Dr. Chappin Aaron Harris" />
										<ListItem primaryText="Article :  I will lift up my hands in your name"  />
										<ListItem primaryText="Video :  God, you are my God. I will earnestly seek you"  />
										<ListItem primaryText="My soul thirst for you" />
										<ListItem primaryText="Because of your loving kindness is better than life" />
										<ListItem primaryText="So i will bless you while i live" />
									</List>
	                            </div>

	                            <div className="section"><div className="divider"></div></div>

	                            <div className="section">
	                            	<h5>Rating & Reviews</h5>
	                            </div>
	                            <div className="section scrollspy" id="ratingReview">
	                            	<div className="row">
		                            	<div className="col m6 offset-m3">
		                            		<img src="http://www.emergingrnleader.com/wp-content/uploads/2016/08/Five-Stars.jpg" style={{width : '100%'}}/>
		                            		<div className="amber-text accent-4 center-align">Rated 4.8 out of 15,656 ratings</div>
		                            	</div>
	                            	</div>
	                            </div>

	                            <div className="section"><div className="divider"></div></div>

	                            <div className="section">
	                            	<List>
										<ListItem 
											primaryText={<img src="http://www.emergingrnleader.com/wp-content/uploads/2016/08/Five-Stars.jpg" style={{width : '10%'}}/>} 
											leftAvatar={<Avatar src="http://www.material-ui.com/images/kolage-128.jpg" />} 
											secondaryText="I Will rejoice in the shadow of your wings. My soul stays close to you. Your right hand holds me up" />
											
										<div className="section"><div className="divider"></div></div>
										
										<ListItem 
											primaryText={<img src="http://www.emergingrnleader.com/wp-content/uploads/2016/08/Five-Stars.jpg" style={{width : '10%'}}/>} 
											leftAvatar={<Avatar src="http://www.material-ui.com/images/chexee-128.jpg" />}  
											secondaryText="But those who seek my soul, to destroy it, shall go into the lower parts of the earth" />
									</List>
	                            </div>

	                            <div className="section center-align">
	                            	<a href="javascript:void(0)" className="btn waves-effect waves-light indigo darken-3">see all reviews</a>
	                            </div>*/}

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
	    					<form className="col s12" id="registrationVisitorForm">
	    						<div className="row">
	    							<div className="input-field col s12">
	    								<input name="email" type="email" id="emailRegister" className="validate" />
	    								<label htmlFor="emailRegister">Email*</label>
	    							</div>
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
	    					</form>
	    				</div>
                	</div>
                	<div className="modal-footer">
                		<button 
                            className={this.state.disableButton ? 'waves-effect waves-green btn-flat disabled' : 'waves-effect waves-green btn-flat'} 
                            onClick={this.handleGotoCourse}>Send</button>
                	</div>
                </div>

            </div>
		)
	}
}