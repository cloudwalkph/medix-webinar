import React, {Component} from 'react';
import { Link } from 'react-router';

export default class About extends Component {

    componentDidMount() {
        $('.parallax').parallax();
    }

    render() {
        return(
            <div className="section">
                <div className="parallax-container scrollspy" id="aboutUs">
                    <div style={{color: 'rgba(0, 0, 0, 0.87)'}}className="container">
                        <div className="row">
                            <div className="col s12 m6">
                                <h2 style={{fontFamily: 'Oxygen', fontWeight: 'bold'}}>ABOUT DENTAL ACCESS WEBINARS</h2>
                            </div>
                            <div className="col s12 m6">
                                <p style={{fontFamily: 'Source Sans Pro'}}>
                                    Dental Access Webinar is an upstart technology platform that aims to deliver continuing dental education for all dentists that is easily accessible through the world-wide web. It provides an 
                                    alternative venue where Dentists would interact with each other and share basic and advanced knowledge in their field of specializations
                                </p>
                                <div className="section">
                                    <Link style={{fontFamily: 'Oxygen', fontWeight: 'bold'}} to="/aboutUs" className="btn waves-effect waves-light indigo darken-3">READ MORE</Link>
                                </div>
                                
                                <div className="divider"></div>
                                
                                <div className="section">
                                    <h4 style={{fontFamily: 'Oxygen', fontWeight: 'bold', color: '#a8a8a8'}}>EDUCATION IS KEY TO OUR DENTAL COMMUNITY'S DEVELOPMENT</h4>
                                </div>
                            </div>
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