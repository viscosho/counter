import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from './pages/Welcome/index';
import Main from './pages/Main/index';

const Routes = () => {
	return (
		<Router>
			<main>
				<Switch>
					<Route exact path="/" component={Welcome} />
					<Route path="/counter" component={Main} />
				</Switch>
			</main>
		</Router>
	);
};

export default Routes;
