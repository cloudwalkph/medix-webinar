import React, {Component} from 'react';
import { Link } from 'react-router';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import SignUp from './SignUp';
import baseUrl from '../config';
import axios from 'axios';

export default class Navbar extends Component {
    state = {
        active : '',
        open : false
    }

    handleLinkClick = (e) => {
        let tag = e.target.getAttribute('href');
        let refName = tag.split('#')[1];
        
        this.setState({
            active : refName
        });
    }

    handleClose = () => {
        this.setState({
            open : false
        });
    }

    handleSubmitForm = () => {
        let url = baseUrl.apiUrl + 'user/add';
        let formData = $('#signUpForm').serialize();
        console.log(formData)
        
        axios.post(url, formData).then((res) => {
            console.log(res);
        }).catch((error) => {
            console.log(error);
        })
    }

    handleSignUpButton = () => {
        this.setState({
            open : true
        })
    }

    componentDidMount() {
        $('.button-collapse').sideNav();
        $('.scrollspy').scrollSpy({
            offset : 0
        });
    }

	render() {
        let pathName = this.props.storeData.location.pathname;

        let actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleSubmitForm}
            />
      ]

        return(
            <div>
                <div className="navbar-fixed">
                    <nav className="white" role="navigation">
                        <div className="container">
                            <div className="nav-wrapper" style={{fontFamily: 'Oxygen', fontWeight: 'bold'}}>
                            <Link to="/" id="logo-container" className="brand-logo">
                                <img src="img/logo.png" />
                            </Link>
                            
                            {
                                pathName == '/' ?
                            <div>
                                <ul className="right hide-on-med-and-down">
                                    {/*<li className={this.state.active == 'topSpecializations' ? 'active' : ''}><a href="#topSpecializations" onClick={this.handleLinkClick}>TOP COURSES</a></li>*/}
                                    <li className={this.state.active == 'LatestUploads' ? 'active' : ''}><a href="#LatestUploads" onClick={this.handleLinkClick}>NEW COURSES</a></li>
                                    <li className={this.state.active == 'aboutUs' ? 'active' : ''}><a href="#aboutUs" onClick={this.handleLinkClick}>ABOUT</a></li>
                                    <li><a href="/">LOG IN</a></li>
                                    <li><a href="#" className="btn waves-effect waves-light indigo darken-3" onClick={this.handleSignUpButton}>SIGN UP</a></li>
                                    
                                </ul>

                                <ul id="nav-mobile" className="side-nav">
                                    <li><a href="#">TOP COURSES</a></li>
                                    <li><a href="#">NEW COURSES</a></li>
                                    <li><a href="#">ABOUT</a></li>
                                    <li><a href="#">LOG IN</a></li>
                                    <li><a href="#" className="btn waves-effect waves-light indigo darken-3">SIGN UP</a></li>
                                </ul>
                            </div>
                                :
                                    null
                            }
                            <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
                            </div>
                        </div>
                    </nav>
                </div>

                <Dialog
                    title="Sign up"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    autoScrollBodyContent={true}
                >
                    <SignUp/>

                </Dialog>

            </div>
        )
    }
}