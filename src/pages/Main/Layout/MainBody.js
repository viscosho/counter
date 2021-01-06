import React, { useState, useEffect } from 'react';
import { CounterList } from '../../../components/CounterList';
import NoCounters from '../components/NoCounters';

const MainBody = () => {
	const [counters, setCounters] = useState(0);
	const [counterList, setcounterList] = useState([]);

	useEffect(() => {
		let API_URL = `http://${window.location.hostname}:3001/api/v1/counter`;

		fetch(API_URL)
			.then((response) => response.json())
			.then((json) => {
				//console.log(json);
				setCounters(json.length);
				console.log(counterList);
				json.forEach((counterItem) => {
					let Item = {
						count: counterItem.count,
						id: counterItem.id,
						title: counterItem.title
					};
					setcounterList((counterList) => [...counterList, Item]);
				});

				//console.log(counterList);
				//console.log(setcounterList);
			});
		return;
	}, []);

	return (
		<main>
			{counterList.map((singleCounter) => (
				<p key={singleCounter.title}>{singleCounter.title}</p>
			))}
			{counters ? <CounterList /> : <NoCounters />}
		</main>
	);
};

export default MainBody;
