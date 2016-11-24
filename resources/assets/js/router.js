const path = require('path');
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Main from './container/Main';
import index from './container/App';
import AboutUs from './container/AboutUs';
import Inside from './courses/Inside';

export default (
	<Route path={path.join(location.pathname + '/')}>
		<IndexRoute component={Main} />

		<Route path="/aboutUs" component={index}>
			<IndexRoute component={AboutUs} />
			
		</Route>
		<Route path="/courses" component={index}>
			<IndexRoute component={Inside}/>
		</Route>
	</Route>
)