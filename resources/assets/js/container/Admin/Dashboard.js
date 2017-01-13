import React, {Component} from 'react';

export default class Dashboard extends Component {

	state = {
		style : {
            logo : {width : '100%'}
        }
	}

	render() {
		return(
			<div>
				<nav className="white">
					<div className="container">
						<div className="nav-wrapper">
							<a href="#" className="brand-logo">
								<img src={window.location.origin + '/img/logo.png'} style={this.state.style.logo} />
							</a>
							<ul id="nav-mobile" className="right hide-on-med-and-down">
								<li><a href="#" className="btn waves-effect waves-light indigo darken-3">LOG OUT</a></li>
							</ul>
						</div>
					</div>
				</nav>
				<ul id="nav-mobile" className="side-nav">
                    <li><a href="#" className="btn waves-effect waves-light indigo darken-3">LOG OUT</a></li>
                </ul>
			</div>
		)
	}
}