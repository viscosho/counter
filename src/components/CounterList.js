import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import incrementValue from '../actions/incrementCountActions';
import decrementValue from '../actions/decrementCounterActions';

const CounterList = (props) => {
	const dispatch = useDispatch();

	//console.log(props);
	const [counter, setCounter] = useState(props.item.count);
	const [active, setActive] = useState(false);

	const deleteItem = () => {
		setActive(!active);
		props.handleClick();
	};

	const oneMore = () => {
		dispatch(incrementValue(props.item.id));
		setCounter(counter + 1);
		props.handleClick('inc');
	};

	const oneLess = () => {
		dispatch(decrementValue(props.item.id));
		setCounter(counter - 1);
		props.handleClick('dec');
	};

	return (
		<ListGroup.Item
			key={props.item.id}
			onClick={deleteItem}
			className={`counter-item d-flex justify-content-between align-items-center mb-1 ${active ? 'item-selected' : null}`}
		>
			<p className="p-0 m-0 counter-name">{props.item.title}</p>
			<div className="d-flex align-items-center counter-actions">
				<button aria-label="Decrease Counter value" className="btn-calculation" onClick={oneLess}>
					-
				</button>
				<p className="p-0 m-0">{counter}</p>
				<button aria-label="Increase Counter value" className="btn-calculation" onClick={oneMore}>
					+
				</button>
			</div>
		</ListGroup.Item>
	);
};

export default CounterList;
