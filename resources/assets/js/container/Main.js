import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const {Grid, Row, Col} = require('react-flexbox-grid');

const {AppBar} = require('material-ui');

import Navbar from '../commons/Navbar'; 
import Header from '../commons/Header';
import LatestUploads from './LatestUploads';
import WeeklyPics from './WeeklyPics';
import TopSpecialization from './TopSpecialization';

export default class Main extends Component {
	
    render() {
		return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <Navbar />
                    <Header />

                    <div className="divider"></div>

                    <LatestUploads />
                    <WeeklyPics />
                    <TopSpecialization />
                </div>
            </MuiThemeProvider>
		)
	}
}