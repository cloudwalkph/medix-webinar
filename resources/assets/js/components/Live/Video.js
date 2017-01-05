import React, { Component } from 'react';

class Video extends Component {

	render() {
		return(
			<video id="my-video" className="video-js" controls preload="auto" width="876" height="380" data-setup="{}">
				<source src="rtmp://54.249.112.76/live/test" type='rtmp/mp4' />
				<p className="vjs-no-js">
					To view this video please enable JavaScript, and consider upgrading to a web browser that
					<a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
				</p>
			</video>
		)
	}
}

export default Video;