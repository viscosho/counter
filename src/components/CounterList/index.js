import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { IncreaseCounter } from '../Api';

const CounterList = ({ id, title, count }) => {
	const [counter, setCounter] = useState(count);

	const oneMore = () => {
		setCounter(counter + 1);
	};

	const oneLess = () => {
		setCounter(counter - 1);
	};

	useEffect(() => {
		IncreaseCounter(id)
			.then((response) => response.json())
			.then((data) => setCounter(counter));
	}, [counter, id]);

	return (
		<ListGroup variant="flush">
			<ListGroup.Item key={id}>
				{title} <button onClick={oneLess}>-</button>
				{counter}
				<button onClick={oneMore}>+</button>
			</ListGroup.Item>
		</ListGroup>
	);
};

export default CounterList;
