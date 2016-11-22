var React = require('react');

var LatestUploads = React.createClass({

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col s5">
                        <h4>LATEST UPLOADS</h4>
                        <div style={{ fontFamily: 'Source Sans Pro' }}>Save me, God by your name. Vindicate me in your might. Hear my prayer, God. Listen to the words of my mouth. For strangers have risen up against me. Violent men have sought after my soul. They haven't set God before them.</div>
                        <div className="divider"></div>

                        <h5>NANO-TECHNOLOGY IN DENTAL INDUSTRY</h5>
                        <p>By Chapin Aaron Harris</p>
                        <p>I will lift up my eyes to the hills. Where does my help come from? My help comes from Yahweh, who made heaven and earth.</p>

                        <div className="row center">
                        <a href="#" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">VIEW COURSE</a>
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
  
