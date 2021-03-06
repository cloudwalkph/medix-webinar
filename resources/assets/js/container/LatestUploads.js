import React, {Component} from 'react';
import { Link } from 'react-router';
import baseUrl from '../config';
import axios from 'axios';

class LatestUploads extends Component {

	constructor (props) {
		super(props);
		this.state = {
			data: []
		}
	}

	getApiCourses = () => {
		
		let url = baseUrl.apiUrl + 'course';
		
		axios.get(url).then((res) => {
			
            this.setState({
            	data : res.data
            })
        }).catch((error) => {
            
        });
		
	}

	componentWillMount() {
		this.getApiCourses();
	}
	
	componentDidUpdate () {
		$('.slider').slider();
	}

    render() {
    	
        return(
            <div className="section scrollspy" id="LatestUploads">
                <div className="container" >
                    <div className="row">
                        <div className="col s12">
                            <div className="slider" id="latestSliders">
                                <ul className="slides" style={{backgroundColor: '#FFF',height : '90vh'}}>
                                {this.state.data.map((item, i) => {
		                            return	<li key={i}>
			                                    <div className="col l6">
			                                        <div className="row">
			                                            <h3 style={{fontFamily: "Source Sans Pro"}}>{'LATEST UPLOADS'}</h3>
			                                            
			                                        </div>
			                                        <hr/>
			                                        <div className="row">
			                                            <h5>
			                                                {item.title}
			                                            </h5>
			                                            <strong style={{fontFamily: 'Source Sans Pro'}}>Lecture by Dr. {i == 0 ? 'Kim Fajardo' : 'Johanna Rosette Po'}</strong>
			                                            <p className="webinarDescription truncate">
			                                                {item.description}
			                                            </p>
			                                            <Link style={{fontFamily: 'Oxygen', fontWeight: 'bold'}} to={"/courses/" + item.id} id="download-button" className="btn waves-effect waves-light indigo darken-3">VIEW COURSE</Link>
			                                        </div>
			                                    </div>
			                                    <div className="col l6">
			                                        <img className="responsive-img" src={item.image} />
			                                    </div>
			                                </li>
                                })}
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default LatestUploads;
  
