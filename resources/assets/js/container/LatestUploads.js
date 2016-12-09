import React from 'react';
import { Link } from 'react-router';

var LatestUploads = React.createClass({

    componentDidMount() {
        $('.slider').slider();
    },

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h5 style={{fontFamily: "Source Sans Pro"}}>LATEST UPLOADS</h5>
                        <div className="slider scrollspy" id="LatestUploads">
                            <ul className="slides">
                                <li>
                                    <img src="img/medic-hospital-laboratory-medical-40559.gif" style={{opacity : '0.5'}}/>
                                    <div className="caption center-align">
                                        <div>
                                            <h5 style={{fontFamily: 'Oxygen'}}>NANO-TECHNOLOGY IN DENTAL INDUSTRY</h5>
                                            <strong style={{fontFamily: 'Source Sans Pro'}}>Lecture of Dr. Kim Fajardo</strong>
                                            <div style={{fontFamily: 'Source Sans Pro',marginTop: '20px'}}>I will lift up my eyes to the hills. Where does my help come from? My help comes from Yahweh, who made heaven and earth.</div>
                                        </div>
                                        <div className="section" style={{paddingTop : '20px'}}>
                                            <Link style={{fontFamily: 'Oxygen', fontWeight: 'bold'}} to="/courses" id="download-button" className="btn waves-effect waves-light indigo darken-3">VIEW COURSE</Link>
                                            {/*<a style={{fontFamily: 'Oxygen', fontWeight: 'bold'}} href="/courses" id="download-button" className="btn waves-effect waves-light indigo darken-3">VIEW COURSE</a>*/}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = LatestUploads;
  
