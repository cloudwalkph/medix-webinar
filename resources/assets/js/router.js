import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Main from './container/Main';

export default (
	<Route path="/">
		<IndexRoute component={Main} />
	</Route>
)