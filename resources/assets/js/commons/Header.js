import React, {Component} from 'react';

export default class Header extends Component {
	render() {
		return (
			<div className="section">
				<div className="container">
					<br />
					<br />
					<h4 className="header center">ONLINE COURSES FOR <span style={{ fontFamily: 'Oxygen', fontWeight: 'bold', color: '#1b584c' }}>CONTINUING EDUCATION</span></h4>

					<div className="row center">
						<div className="col s8 offset-s2">
							<h6 style={{ fontFamily: 'Source Sans Pro' }}>Blessed is the man who doesn&rsquo;t walk in the counsel of the wicked, nor stand in the way of sinners, nor sit in the seat of scoffers; but his delight is in Yahweh&rsquo;s law.</h6>
						</div>
					</div>
					
					<div className="row center">
						<a href="#" id="download-button" className="btn-large waves-effect waves-light">Get Started</a>
					</div>
				</div>
			</div>
		)
	}
}
