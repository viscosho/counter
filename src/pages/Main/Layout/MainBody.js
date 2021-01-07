import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { GetCounterList } from '../../../components/Api';
import CounterList from '../components/CounterList';
import NoCounters from '../components/NoCounters';

const MainBody = () => {
	const [counters, setCounters] = useState(0);
	const [counterList, setCounterList] = useState([]);

	const getPosts = () => {
		GetCounterList().then((json) => {
			setCounters(json.length);
			setCounterList(json);
		});
	};

	useEffect(() => {
		const interval = setInterval(() => {
			getPosts();
		}, 5000);
		return () => clearInterval(interval);
	}, [setCounterList]);

	return (
		<section>
			<ListGroup>{counters ? counterList.map((singleCounter) => <CounterList key={singleCounter.id} item={singleCounter} />) : <NoCounters />}</ListGroup>
		</section>
	);
};

export default MainBody;
