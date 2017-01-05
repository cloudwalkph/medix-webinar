import React , { Component } from 'react';
import Readmore from '../../commons/Readmore';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


export default class Courses extends Component {
	
	state = {
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
		}
	}

	componentDidMount () {
        $('.parallax').parallax();
        $('.scrollspy').scrollSpy();

        $('body').scrollTop(0);
    }

	render() {
		return (
			<div>

                <div className="row valign-wrapper">
                    <div className="col l5">
	                    <div className="row">
	                        <img className="responsive-img" src="img/Courses/pajards.png" />
                        </div>
                    </div>
                    <div className="col l6 offset-l1">
	                    <div className="row">
	                    	<div className="col l7">
	                    		<h4>
		                        	<strong>TEMPORIZATION:</strong> THE ROAD TO FINAL RESTORATION
		                        </h4>
		                        <p className="webinarDescription">
		                            The current trent of the dental profession is geared towards esthetics and beauty. All patients want a beautiful and pleasant smile. 
		                            Practitioners all agree that Temporization is one basic and essential procedure that ensures optimal esthetics for our fixed
		                            restorative cases.
		                        </p>
		                        <h6 style={{color: '#4444ff'}}>LEARNING OBJECTIVES:</h6>
		                        <p className="webinarDescription">
		                            Review the basic fundamentals of Temporization <br/>
		                            Revisit the classic techniques<br/>
		                            Introduce new innovations to create an easy work
		                            flow to the clinician and the patient.
		                        </p>
	                    	</div>
	                    </div>
                    </div>
                    
                </div>

                <div className="section">

                    <div className="row">
                        <div className="col hide-on-small-only m4 l4" style={{borderRight : '2px solid #64b5f6'}}>
	                        <div className="container" id="tab-scroll-pin">
	                            <ul className="section table-of-contents">
	                                <li style={this.state.styles.linkList}>
	                                	<a href="#introduction" style={this.state.styles.linkFont}>Overview</a>
	                                </li>
	                                <li style={this.state.styles.linkList}>
	                                	<a href="#syllabus" style={this.state.styles.linkFont}>Syllabus</a>
	                                </li>
	                                <li style={this.state.styles.linkList}>
	                                	<a href="#ratingReview" style={this.state.styles.linkFont}>Course Rating</a>
	                                </li>
	                                <li style={this.state.styles.linkList}>
	                                	<div className='section'>
	                                    	<button className="btn waves-effect waves-light indigo darken-3">Enroll Now</button>
	                                    </div>
	                                    <div className="grey-text">
	                                        This course requires at least 2 hours per session. 
	                                    </div>
	                                </li>
	                            </ul>
	                        </div>
                        </div>
                        <div className="col s12 m8 l8">
	                        <div className="container">
	                            <div id="introduction" className="section scrollspy">
	                            	<div className="section">
	                            		<div style={this.state.styles.profileDiv}>
	                            			<img src="img/Courses/pajards.png" style={this.state.styles.imgProfile}/>
	                            			<div style={this.state.styles.profileContent}>
	                            				<strong>Professor:</strong><span className="webinarDescription"> Dr. Kimberly Ray R. Fajardo</span>
	                            			</div>
	                            		</div>
	                            	</div>
	                            	<Readmore/>

	                            </div>

	                            <div className="section">
	                            	<h5>Title : <span className="grey-text">Temporization: The Road to Final Restoration</span></h5>
	                            </div>

	                            <div className="section">
	                                <h5>Time : <span className="grey-text">8:00 pm - 9:00 pm (Sunday)</span></h5>
	                            </div>

	                            <div className="section">
	                                <h5>Duration : <span className="grey-text">1 Hour</span></h5>
	                            </div>

	                            <div className="section">
	                                <h5>Language : <span className="grey-text">English</span></h5>
	                            </div>

	                            <div className="section">
	                                <h5>Price : <span className="grey-text">Free</span></h5>
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
                    <div className="row">
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
                    </div>

                </div>

            </div>
		)
	}
}