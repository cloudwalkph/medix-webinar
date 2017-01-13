import React, {Component} from 'react';
import Video from '../../components/Live/Video';

export default class Content extends Component {

	render() {
		return(
			<div className="container heightView">
				<div className="section">
					
					<Video />
				
				</div>
			</div>
		)
	}
}