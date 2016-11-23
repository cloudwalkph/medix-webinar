var React = require('react');

var About = React.createClass({

    componentDidMount () {
        $('.parallax').parallax();
    },

    render() {
        return(
            <div className="section">
                <div className="parallax-container">
                    <div style={{color: 'rgba(0, 0, 0, 0.87)'}}className="container">
                        <div className="row">
                            <div className="col s12 m6">
                                <h2 style={{fontFamily: 'Oxygen', fontWeight: 'bold'}}>ABOUT DENTAL ACCESS WEBINARS</h2>
                            </div>
                            <div className="col s12 m6">
                                <p style={{fontFamily: 'Source Sans Pro'}}>Let God arise! Let his enemies be scattered! Let them who hate him also flee before him. As smoke is driven away, so drive them away. As was melts before the fire, so let the wicked perish at the presence of God. But let the righteous be glad. Let them rejoice before God. Yes, let them rejoice with gladness. Sing to God! Sing praises to his name! Extol him who rides on the clouds: to Yah, his name! Rejoice before him! A father of the fatherless, and a defender of the widows, is God in his holy habitation. God sets the lonely in families. He brings out the prisoners with singing, but the rebellious dwell in a sun-scorched land.</p>

                                <div className="divider"></div>

                                <h4 style={{fontFamily: 'Oxygen', fontWeight: 'bold'}}>EDUCATION IS KEY TO OUR DENTAL COMMUNITY'S DEVELOPMENT</h4>
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
});

module.exports = About;