import React , { Component } from 'react';

export default class Courses extends Component {
	
	componentDidMount () {
        $('.parallax').parallax();
        $('.scrollspy').scrollSpy();
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
                        <div className="col hide-on-small-only m3 l2">
                            <ul className="section table-of-contents">
                                <li><a href="#introduction">Overview</a></li>
                                <li><a href="#structure">Syllabus</a></li>
                                <li><a href="#initialization">Course Rating</a></li>
                                <li>
                                    <button>Enroll Now</button>
                                    <div>
                                        This course requires at least 2 hours per session. 
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col s12 m9 l10">
                            <div id="introduction" className="section scrollspy">
                                <p>Content </p>
                            </div>

                            <div id="structure" className="section scrollspy">
                                <p>Content </p>
                            </div>

                            <div id="initialization" className="section scrollspy">
                                <p>Content </p>
                            </div>
                        </div>
                        
                    </div>

                </div>

            </div>
		)
	}
}