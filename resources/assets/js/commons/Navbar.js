import React, {Component} from 'react';

export default class Navbar extends Component {

    constructor(props) {
        super(props);

        this.getPage = this.getPage.bind(this);
    }

    getPage(event) {
        if(event.target.id == 'logo-container') {
            this.props.getPage('homepage');
        }
        if(event.target.text == 'TOP COURSES') {
            this.props.getPage('inside');
        }
    }
    
	render() {
        return(
            <div className="navbar-fixed">
                <nav className="white" role="navigation">
                    <div className="container">
                        <div className="nav-wrapper" style={{fontFamily: 'Oxygen', fontWeight: 'bold'}}>
                        <a id="logo-container" onClick={this.getPage} href="#" className="brand-logo">
                            <img src="img/logo.png" />
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="#" onClick={this.getPage}>TOP COURSES</a></li>
                            <li><a href="#">NEW COURSES</a></li>
                            <li><a href="#">ABOUT</a></li>
                            <li><a href="#">LOG IN</a></li>
                            <li><a href="#" className="btn waves-effect waves-light indigo darken-3">SIGN UP</a></li>
                            
                        </ul>

                        <ul id="nav-mobile" className="side-nav">
                            <li><a href="#" onClick={this.getPage}>TOP COURSES</a></li>
                            <li><a href="#">NEW COURSES</a></li>
                            <li><a href="#">ABOUT</a></li>
                            <li><a href="#">LOG IN</a></li>
                            <li><a href="#" className="btn waves-effect waves-light indigo darken-3">SIGN UP</a></li>
                        </ul>
                        <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}