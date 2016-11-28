import React, { Component } from 'react';

export default class AboutUs extends Component {

	componentDidMount() {
        $('.parallax').parallax();
        $('body').scrollTop(0);
    }

	render() {
		
		return (
			<div className="row">
				<div className="parallax-container">
					<div style={{color: 'rgba(0, 0, 0, 0.87)'}} className="container">
						<h5>ABOUT DENTAL ACCESS WEBINARS</h5>
						<div className="section">
							<p style={{fontFamily: 'Source Sans Pro'}}>
								Dental Access Webinar is committed to provide the highest 
								standards of education in the Dental profession with the noble 
								intention of helping address human problems through introduction of the 
								latest technologies, keeping in par with global standards, thereby helping people live better lives.  
							</p>
						</div>
						<div className="section">
							<h5>Philosophy</h5>
						</div>
						<div className="section">
							<p style={{fontFamily: 'Source Sans Pro'}}>
								“Education is nurtured through a conscious commitment of continuous learning throughout life.”
							</p>
						</div>
						<div className="section">
							<h5>Vision</h5>
						</div>
						<div className="section">
							<p style={{fontFamily: 'Source Sans Pro'}}>
								To become the leading web-based continuing professional education provider for 
								Dentistry as well as in the delivery of basic dental health education for 
								dental patients in the Philippines and the rest of Asia-Pacific Region in the next five years.
							</p>
						</div>
						<div className="section">
							<h5>Mission</h5>
						</div>
						<div className="section">
							<p style={{fontFamily: 'Source Sans Pro'}}>
								To provide easy access to continuing professional education to 
								Dentists who are having difficulty in personally 
								attending clinical conferences, seminars and conventions and at the 
								same time assist dental patients in reaching information as regards dental health situations. 
							</p>
						</div>
					</div>
					<div className="parallax">
                        <img src="img/Rectangle-532.jpg" width="100%" />
                    </div>
				</div>
			</div>
		)
	}
}