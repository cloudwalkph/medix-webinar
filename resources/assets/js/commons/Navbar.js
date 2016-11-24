import React, {Component} from 'react';

export default class Navbar extends Component {

    state = {
        active : ''
    }

    handleLinkClick = (e) => {
        let tag = e.target.getAttribute('href');
        let refName = tag.split('#')[1];
        
        this.setState({
            active : refName
        });
    }

    componentDidMount() {
        $('.button-collapse').sideNav();
        $('.scrollspy').scrollSpy();
    }

	render() {
        console.log(this.state.active)
        return(
            <div className="navbar-fixed">
                <nav className="white" role="navigation">
                    <div className="container">
                        <div className="nav-wrapper" style={{fontFamily: 'Oxygen', fontWeight: 'bold'}}>
                        <a id="logo-container" href="#" className="brand-logo">
                            <img src="img/logo.png" />
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li className={this.state.active == 'topSpecializations' ? 'active' : ''}><a href="#topSpecializations" onClick={this.handleLinkClick}>TOP COURSES</a></li>
                            <li><a href="#">NEW COURSES</a></li>
                            <li className={this.state.active == 'aboutUs' ? 'active' : ''}><a href="#aboutUs">ABOUT</a></li>
                            <li><a href="#">LOG IN</a></li>
                            <li><a href="#" className="btn waves-effect waves-light indigo darken-3">SIGN UP</a></li>
                            
                        </ul>

                        <ul id="nav-mobile" className="side-nav">
                            <li><a href="#">TOP COURSES</a></li>
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