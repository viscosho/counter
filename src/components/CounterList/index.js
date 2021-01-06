import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { OperationCounter } from '../Api';

const CounterList = (item) => {
	const [counter, setCounter] = useState(item.item.count);

	const oneMore = () => {
		OperationCounter(item.item.id, 'inc');
		setCounter(counter + 1);
	};

	const oneLess = () => {
		OperationCounter(item.item.id, 'dec');
		setCounter(counter - 1);
	};

	return (
		<ListGroup.Item key={item.item.id}>
			{item.item.title} <button onClick={oneLess}>-</button>
			{counter}
			<button onClick={oneMore}>+</button>
		</ListGroup.Item>
	);
};

export default CounterList;
