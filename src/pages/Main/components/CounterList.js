import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { OperationCounter } from '../../../components/Api';

const CounterList = (item, count, handleClick) => {
	const [counter, setCounter] = useState(item.item.count);
	const [active, setActive] = useState(false);

	const deleteItem = () => {
		//const currentState = active;
		setActive(!active);
		//console.log(active);
	};

	const oneMore = () => {
		OperationCounter(item.item.id, 'inc');
		setCounter(counter + 1);
		item.handleClick();
	};

	const oneLess = () => {
		OperationCounter(item.item.id, 'dec');
		setCounter(counter - 1);
		item.handleClick();
	};

	return (
		<ListGroup.Item
			key={item.item.id}
			onClick={deleteItem}
			className={`counter-item d-flex justify-content-between align-items-center mb-1 ${
				active ? 'item-selected' : null
			}`}
		>
			<p className="p-0 m-0 counter-name">{item.item.title}</p>
			<div className="d-flex align-items-center counter-actions">
				<button className="btn-calculation" onClick={oneLess}>
					-
				</button>
				<p className="p-0 m-0">{counter}</p>
				<button className="btn-calculation" onClick={oneMore}>
					+
				</button>
			</div>
		</ListGroup.Item>
	);
};

export default CounterList;
