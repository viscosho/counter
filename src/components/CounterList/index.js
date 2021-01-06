import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { IncreaseCounter } from '../Api';

const CounterList = (item) => {
	console.log(item);
	const [counter, setCounter] = useState(item.item.count);

	const oneMore = () => {
		setCounter(counter + 1);
		IncreaseCounter(item.item.id)
			//.then((response) => response.json())
			.then(console.log);
	};

	const oneLess = () => {
		setCounter(counter - 1);
	};

	useEffect(() => {
		setTimeout(() => {
			//console.log(item);
			//IncreaseCounter(item.item.id)
			//.then((response) => response.json())
			//.then(console.log);
			// .then((data) => setCounter(counter));
		}, 1000);
	}, [counter, item.item.id]);

	return (
		<ListGroup.Item key={item.item.id}>
			{item.item.title} <button onClick={oneLess}>-</button>
			{counter}
			<button onClick={oneMore}>+</button>
		</ListGroup.Item>
	);
};

export default CounterList;
