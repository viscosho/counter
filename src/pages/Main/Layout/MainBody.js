import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { GetCounterList } from '../../../components/Api';
import CounterList from '../components/CounterList';
import NoCounters from '../components/NoCounters';

const MainBody = () => {
	const [counters, setCounters] = useState(0);
	const [counterList, setcounterList] = useState([]);

	useEffect(() => {
		GetCounterList().then((json) => {
			//console.log(json);
			setCounters(json.length);
			json.forEach((counterItem) => {
				let Item = {
					count: counterItem.count,
					id: counterItem.id,
					title: counterItem.title
				};
				setcounterList((counterList) => [...counterList, Item]);
			});
		});
	}, []);

	return (
		<section>
			<ListGroup>{counters ? counterList.map((singleCounter) => <CounterList key={singleCounter.id} item={singleCounter} />) : <NoCounters />}</ListGroup>
		</section>
	);
};

export default MainBody;
