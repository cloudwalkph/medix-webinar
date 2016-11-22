import React, {Component} from 'react';

const {Grid, Row, Col} = require('react-flexbox-grid');

const {AppBar} = require('material-ui');

var Navbar = require('../components/Navbar');
import Header from '../commons/Header';
var LatestUploads = require('./LatestUploads');
var WeeklyPics = require('./WeeklyPics');


export default class Main extends Component {
	render() {
		return (
            <div>
                <Navbar />
                <Header />

                <div className="divider"></div>

                <LatestUploads />
                <WeeklyPics />
            </div>

		)
	}
}