const path = require('path');
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Main from './container/Main';
import index from './container/App';
import AboutUs from './container/AboutUs';
import Courses from './container/Courses';

export default (
	<Route path={'/'}>
		<IndexRoute component={Main} />

		<Route path="/aboutUs" component={index}>
			<IndexRoute component={AboutUs} />
			
		</Route>
		<Route path="/courses/:courseId" component={index}>
			<IndexRoute component={Courses}/>
		</Route>
	</Route>
)