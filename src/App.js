import React from 'react';
import Container from 'react-bootstrap/Container';
import Routes from './components/Routes';

// You don't have to use `fetch` btw, use whatever you want
const getCounters = () => fetch('/api/v1/counter', { method: 'get' }).then((res) => res.json());

const App = () => {
	React.useEffect(() => {
		getCounters().then(console.log, console.error);
	}, []);

	return (
		<Container>
			<Routes />
		</Container>
	);
};

export default App;
