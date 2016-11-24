import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const {Grid, Row, Col} = require('react-flexbox-grid');

const {AppBar} = require('material-ui');

import Navbar from '../commons/Navbar'; 
import Footer from './Footer';

import Homepage from './Homepage';
import Inside from '../courses/Inside';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            page: props.initialValue || 'placeholder'
        };

        this.getPage = this.getPage.bind(this);
    }

    getPage(page) {
        this.setState({
            page: page
        })
    }
	
    render() {
		return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <Navbar getPage={this.getPage} />

                        {this.state.page == 'homepage' ? <Homepage /> : ''}
                        {this.state.page == 'inside' ? <Inside /> : ''}
                        
                    <Footer />
                </div>
            </MuiThemeProvider>
		)
	}
}

Main.propTypes = {
  initialValue: React.PropTypes.string
};
Main.defaultProps = {
  initialValue: 'inside'
};

export default Main;