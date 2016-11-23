import React from 'react';

var LatestUploads = React.createClass({

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col s5">
                        <div className="section">
                            <h5 style={{fontFamily: 'Oxygen'}}>LATEST UPLOADS</h5>
                            <div style={{fontFamily: 'Source Sans Pro'}}>
                                Save me, God by your name. Vindicate me in your might. 
                                Hear my prayer, God. Listen to the words of my mouth. 
                                For strangers have risen up against me. 
                                Violent men have sought after my soul. They haven't set God before them.
                            </div>
                        </div>

                        <div className="divider"></div>

                        <div className="section">
                            <h5 style={{fontFamily: 'Oxygen'}}>NANO-TECHNOLOGY IN DENTAL INDUSTRY</h5>
                            <p style={{fontFamily: 'Source Sans Pro'}}>By Chapin Aaron Harris</p>
                            <div style={{fontFamily: 'Source Sans Pro'}}>I will lift up my eyes to the hills. Where does my help come from? My help comes from Yahweh, who made heaven and earth.</div>
                        </div>
                        <div className="section">
                            <div className="row">
                                <a style={{fontFamily: 'Oxygen', fontWeight: 'bold'}} href="#" id="download-button" className="btn waves-effect waves-light indigo darken-3">VIEW COURSE</a>
                            </div>
                        </div>

                        <ul className="pagination">
                            <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                            <li className="waves-effect"><a href="#!">1</a></li>
                            <li className="waves-effect"><a href="#!">2</a></li>
                            <li className="waves-effect"><a href="#!">3</a></li>
                            <li className="waves-effect active"><a href="#!">4</a></li>
                            <li className="waves-effect"><a href="#!">5</a></li>
                            <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
                        </ul>
                    </div>

                    <div className="col s7">
                        <img src="img/medic-hospital-laboratory-medical-40559.gif" width="100%" />
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = LatestUploads;
  
