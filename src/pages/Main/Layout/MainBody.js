import React, { useState, useEffect, Fragment } from 'react';
import { ListGroup } from 'react-bootstrap';
import { GetCounterList } from '../../../components/Api';
import CounterList from '../components/CounterList';
import NoCounters from '../components/NoCounters';

const MainBody = () => {
	const [counters, setCounters] = useState(0);
	const [counterList, setCounterList] = useState([]);

	const [count, setCount] = useState(0);
	const increment = () => setCount(count + 1);

	const getPosts = () => {
		GetCounterList().then((json) => {
			setCounters(json.length);
			setCounterList(json);
		});
	};

	useEffect(() => {
		// const interval = setInterval(() => {
		// 	getPosts();
		// }, 5000);
		// return () => clearInterval(interval);
		getPosts();
	}, []);

	// useEffect(() => {
	// 	console.log('state change');
	// }, [counterList]);

	return (
		<section>
			<p>{counters} items</p>
			<p>You clicked {count} times</p>
			{
				<ListGroup>
					{counters ? (
						counterList.map((singleCounter) => (
							<Fragment>
								<CounterList handleClick={increment} key={singleCounter.id} item={singleCounter} />
							</Fragment>
						))
					) : (
						<NoCounters />
					)}
				</ListGroup>
			}
		</section>
	);
};

export default MainBody;
