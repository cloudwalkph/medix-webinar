import React, {Component} from 'react';
import { Link } from 'react-router';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import SignUp from './SignUp';
import Login from './Login';
import baseUrl from '../config';
import axios from 'axios';
import { browserHistory } from 'react-router';

export default class Navbar extends Component {
    state = {
        active : '',
        open : false,
        openLogin : false,
        disableButton : false,
        style : {
            logo : {width : '100%'},
            smallModal : {width : '50%'}
        }
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
            open : false,
            openLogin : false
        });
    }

    handleSubmitForm = (e) => {

        let url = baseUrl.apiUrl + 'user';
        let formData = $('#signUpForm').serialize();
        this.setState({
            disableButton : true
        });
        if(this.formValidation() == 1)
        {
            axios.post(url, formData).then((res) => {
                this.setState({
                    disableButton : false,
                    open : false
                });
            }).catch((error) => {
                this.setState({
                    disableButton : false
                });
            })
        }

        
    }

    handleLoginForm = (e) => {
        let url = baseUrl.apiUrl + 'login';
        let formData = $('#loginForm');

        this.setState({
            disableButton : true
        });
        if(this.loginValidation(formData) == 1)
        {
            let data = formData.serialize();
            axios.post(url, data).then((res) => {
                this.setState({
                    disableButton : false,
                    openLogin : false
                },() => {
                    this.getSession(res.data);
                });
            }).catch((error) => {
                console.log(error);
                this.setState({
                    disableButton : false
                });
            })
        }
        this.setState({
            disableButton : false
        });
    }

    getSession = (data) => {
        sessionStorage.setItem('access',JSON.stringify(data));
        browserHistory.push('/myprofile');
    }

    loginValidation = (form) => {
        if(!form[0].username.value)
        {
            return 0;
        }
        if(!form[0].password.value)
        {
            return 0;
        }
        return 1;
    }

    formValidation = () => {

        if(!$('#signUpForm')[0].first_name.value)
        {
            return 0;
        }
        
        if(!$('#signUpForm')[0].last_name.value)
        {
            return 0;
        }
        
        if(!$('#signUpForm')[0].email.value)
        {
            return 0;
        }
        
        if(!$('#signUpForm')[0].gender.value)
        {
            return 0;
        }

        return 1;
    }

    handleSignUpButton = (e) => {
        this.setState({
            open : true
        })
    }

    handleLogin = (e) => {
        this.setState({
            openLogin : true
        })
    }

    componentDidMount() {
        $('.button-collapse').sideNav({
            closeOnClick: true
        });
        $('.scrollspy').scrollSpy({
            offset : 0
        });
    }

	render() {
        let pathName = this.props.storeData.location.pathname;
        let user = JSON.parse(sessionStorage.getItem('access'));
        
        let liLinks = <ul className="right hide-on-med-and-down">
                        {/*<li className={this.state.active == 'topSpecializations' ? 'active' : ''}><a href="#topSpecializations" onClick={this.handleLinkClick}>TOP COURSES</a></li>*/}
                        <li className={this.state.active == 'LatestUploads' ? 'active' : ''}><a href="#LatestUploads" onClick={this.handleLinkClick}>NEW COURSES</a></li>
                        <li className={this.state.active == 'aboutUs' ? 'active' : ''}><a href="#aboutUs" onClick={this.handleLinkClick}>ABOUT</a></li>
                        <li><a href="#" onClick={this.handleLogin}>LOG IN</a></li>
                        <li><a href="#" className="btn waves-effect waves-light indigo darken-3" onClick={this.handleSignUpButton}>SIGN UP</a></li>
                        
                    </ul>

        if(user)
        {
            liLinks = <ul className="right hide-on-med-and-down">
                        {/*<li className={this.state.active == 'topSpecializations' ? 'active' : ''}><a href="#topSpecializations" onClick={this.handleLinkClick}>TOP COURSES</a></li>*/}
                        <li><Link to="/myprofile" >My Profile</Link></li>
                        <li><a href="#" className="btn waves-effect waves-light indigo darken-3" onClick={this.handleSignUpButton}>LOG OUT</a></li>
                    </ul>
        }

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
                disabled={this.state.disableButton}
                onTouchTap={this.handleSubmitForm}
            />
        ];
        let loginActions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Login"
                primary={true}
                keyboardFocused={true}
                disabled={this.state.disableButton}
                onTouchTap={this.handleLoginForm}
            />
        ];

        return(
            <div>
                <div className="navbar-fixed">
                    <nav className="white" role="navigation">
                        <div className="container">
                            <div className="nav-wrapper" style={{fontFamily: 'Oxygen', fontWeight: 'bold'}}>
                            <Link to="/" id="logo-container" className="brand-logo">
                                <img src={window.location.origin + '/img/logo.png'} style={this.state.style.logo} />
                            </Link>
                            
                            {liLinks}

                            <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons black-text">menu</i></a>
                            </div>
                        </div>
                    </nav>
                </div>
                <ul id="nav-mobile" className="side-nav">
                    <li><a href="#">TOP COURSES</a></li>
                    <li><a href="#LatestUploads">NEW COURSES</a></li>
                    <li><a href="#aboutUs">ABOUT</a></li>
                    <li><a href="#">LOG IN</a></li>
                    <li><a href="#" className="btn waves-effect waves-light indigo darken-3" onClick={this.handleSignUpButton}>SIGN UP</a></li>
                </ul>
                <Dialog
                    title="Sign up"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    autoScrollBodyContent={true}
                >
                    <SignUp/>

                </Dialog>

                <Dialog
                    title="Login"
                    actions={loginActions}
                    modal={false}
                    open={this.state.openLogin}
                    autoScrollBodyContent={true}

                >
                    <Login/>

                </Dialog>

            </div>
        )
    }
}