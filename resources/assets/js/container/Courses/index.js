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
				fontSize: '25px'
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

                <div className="row">
                    <div className="col m8">
                        <div className="">
                            <div className="parallax-container">
                                <div className="parallax"><img src="img/pexels-photo-87346.jpg" width="100%" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col m4">
                        <h4>
                            ACCELERATED ALIGNER THERAPY
                        </h4>
                        <p style={{lineHeight : '1.4rem'}}>
                            Yahweh Reigns! Let the people tremble. He sits enthroned among the cherubim. Let the earth be moved. 
                            Yahweh is great in Zion. He is high above all the peoples. Let them praise your great and awesome name. 
                            He is Holy! The King's strength also loves justice. You do establish equity.
                        </p>
                        <h5>
                            COURSE DETAILS
                        </h5>
                        <div>
                            3 Courses
                        </div>
                        <div>
                            20 Articles
                        </div>
                        <div>
                            8 Videos
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
	                            			<img src="img/pexels-photo.jpg" style={this.state.styles.imgProfile}/>
	                            			<div style={this.state.styles.profileContent}>
	                            				<strong>Professor:</strong> Chapin Aaron Harris
	                            			</div>
	                            		</div>
	                            	</div>
	                            	<Readmore/>

	                            </div>

	                            <div className="section">
	                            	<h5>Course 1 : <span className="grey-text">Introduction to Aligner Therapy</span></h5>
	                            	<p className="grey-text">
	                            		Visit me with your salvation, that i may see the prosperity of your chosen, that i may rejoice
	                            		in the gladness of your nation, that i may glory with your inheritance.
	                            	</p>
	                            </div>

	                            <div className="section">
	                                <h5>Course 2 : <span className="grey-text">Basic Aligner Therapy</span></h5>
	                                <p className="grey-text">
	                                	We have sinned with our fathers. We have committed iniquity. We have done wickedly. Our fathers
	                                	didn't understand your wonders in Egypt
	                                </p>
	                            </div>

	                            <div className="section">
	                                <h5>Course 3 : <span className="grey-text">Accelerated Aligner Therapy</span></h5>
	                                <p className="grey-text">
	                                	They didn't remember the multitude of your loving kindnesses, but were rebellious at the sea,
	                                	even at the Red sea. Nevertheless he saved them for his name's sake, that he might make his
	                                	mighty power known. He rebuked the Red Sea also, and it was dried up;so he led them through 
	                                	the depths, as through a desert.
	                                </p>
	                            </div>

	                            <div className="section"><div className="divider"></div></div>
	                            <div className="section scrollspy" id="syllabus">
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
	                            </div>

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