import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Create from '../pages/Create';
import Main from '../pages/Main';

const Routes = () => {
	return (
		<Router>
			<main>
				<Switch>
					<Route exact path='/' component={Welcome} />
					<Route path='/counter' component={Main} />
					<Route path='/create' component={Create} />
				</Switch>
			</main>
		</Router>
	);
};

export default Routes;
