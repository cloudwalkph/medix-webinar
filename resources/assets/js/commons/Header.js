import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
export default class Header extends Component {

	state = {
		items : ['hello', 'world', 'click', 'me']
	}

	componentDidMount() {
		
	}

	render() {
		let fullscreen = screen.height - 262 - 64;
			fullscreen = fullscreen / 2;

		return (
			<div className="section" style={{paddingTop: fullscreen,paddingBottom: fullscreen}}>
				<div className="container">
					<br />
					<h4 className="header center">ONLINE COURSES FOR <span style={{ fontFamily: 'Oxygen', fontWeight: 'bold', color: '#1b584c' }}>CONTINUING EDUCATION</span></h4>

					<div className="row center">
						<div className="col s8 offset-s2">
							<h6 style={{ fontFamily: 'Source Sans Pro' }}>
								Dental Access Webinar is an upstart technology platform that aims to deliver continuing dental education for all dentists that is easily accessible through the world-wide web. It provides an 
                                alternative venue where Dentists would interact with each other and share basic and advanced knowledge in their field of specializations
							</h6>
						</div>
					</div>
					
					<div className="row center">
						<a href="#LatestUploads" id="download-button" className="btn-large waves-effect waves-light indigo darken-4">Get Started</a>
					</div>
				</div>
			</div>
		)
	}
}
