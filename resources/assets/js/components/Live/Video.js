import React, { Component } from 'react';

class Video extends Component {

	render() {
		return (
			<video id="my-video" className="video-js" controls preload="auto" height="300" data-setup='{"preload": "auto"}' style={{ margin: '0 auto' }}>
				<source src={this.props.videoSrc} type={this.props.videoType} />
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