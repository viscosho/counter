import React, { useState, useEffect } from 'react';
import { GetCounterList } from '../../../components/Api';
import CounterList from '../../../components/CounterList';
import NoCounters from '../components/NoCounters';

const MainBody = (props) => {
	const [counters, setCounters] = useState(0);
	const [counterList, setcounterList] = useState([]);

	useEffect(() => {
		GetCounterList().then((json) => {
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

	return <main>{counters ? counterList.map((singleCounter) => <CounterList key={singleCounter.title} title={singleCounter.title} count={singleCounter.count} />) : <NoCounters />}</main>;
};

export default MainBody;
