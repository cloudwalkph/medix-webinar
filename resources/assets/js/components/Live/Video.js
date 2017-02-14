import React, { Component } from 'react';

class Video extends Component {

	state = {
		videoSrc : 'rtmp://54.238.155.160/live/test'
	}

	componentDidMount() {

		this.setState({
			videoSrc : 'rtmp://54.238.155.160/live/test'
		},() => {
			// window.location.href = self.location;
		});

	}

	render() {

		return(
			<video id="my-video" className="video-js" controls preload="auto" height="500" data-setup='{"preload": "auto"}' style={{width : '100%',height : '300px'}}>
				<source src={this.state.videoSrc} type='rtmp/mp4' />
				<p className="vjs-no-js">
					To view this video please enable JavaScript, and consider upgrading to a web browser that
					<a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
				</p>
			</video>
		)

		// return (
		// 	<iframe width="661" height="315"
		// 		src="https://www.youtube.com/embed/sZHcNe38Yhk?autoplay=1">
		// 	</iframe>
		// )
	}
}

export default Video;