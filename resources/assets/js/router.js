const path = require('path');
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Main from './container/Main';

export default (
	<Route path={path.join(location.pathname + '/')}>
		<IndexRoute component={Main} />
	</Route>
)