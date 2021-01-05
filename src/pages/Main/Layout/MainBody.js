import React, { useState, useEffect } from 'react';
import { CounterList } from '../../../components/CounterList';
import NoCounters from '../components/NoCounters';

const MainBody = () => {
	const [counters, setCounters] = useState(0);

	useEffect(() => {
		let API_URL = `http://${window.location.hostname}:3001/api/v1/counter`;

		fetch(API_URL)
			.then((response) => response.json())
			.then((json) => {
				//console.log(json.length);
				setCounters(json.length);
				//console.log(counterList);
			});
	}, [counters]);

	return <main>{counters ? <CounterList /> : <NoCounters />}</main>;
};

export default MainBody;
