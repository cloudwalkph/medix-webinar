import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import baseUrl from '../../config';
import { Link } from 'react-router';
import axios from 'axios';
import moment from 'moment';

export default class MyProfile extends Component {

	state = {
		data : []
	}

	getApiCourses = () => {
		
		let url = baseUrl.apiUrl + 'course/';
		
		axios.get(url).then((res) => {
            this.setState({
            	data : res.data
            })
        }).catch((error) => {
            console.log(error)
        });
		
	}

	componentDidMount() {
		this.getApiCourses();
	}

	render() {
		
		return(
			<div className="section heightView">
				<div className="row">
					<div className="col l3 verticalLine">
						<div className="container">
							<ul  className="section table-of-contents contentListLink">
								<li><a href="#!" className="active">COURSES</a></li>
							</ul>
						</div>
					</div>
					<div className="col l9">
					{this.state.data.map((item, i) => {
						let date = moment(item.start).format('DD MM');
						return	<div className="col s12 l4" key={i}>
									<div className="card">
										<div className="card-image" style={{maxHeight : '345px', overflow : 'hidden'}}>
											<img src={i == 0 ? window.location.origin + '/img/Courses/pajards.png' : window.location.origin + '/img/Courses/johanna.jpg'}/>
											<span className="card-medix-title">{date}</span>
										</div>
										<div className="card-content">
											<p>{item.title}</p>
										</div>
										<div className="card-action">
											<div className="row" style={{margin : 0}}>
												<div className="col l8 left-align">
													<a href={"/courses/" + item.id} className="brand-logo"  style={{margin : 0}}>Dr. {i == 0 ? 'Kim Fajardo' : 'Johanna Rosette Po'}</a>
												</div>
												<div className="col l4 right-align">
													<a href={"/courses/" + item.id} className="brand-logo"  style={{margin : 0}}>VISIT</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								
							
					})}
					</div>
				</div>
			</div>
		)
	}

}