import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import incrementValue from '../actions/incrementCountActions';

const UpdateCounterModalError = (props) => {
	const dispatch = useDispatch();
	const count_reducer = useSelector((state) => state.api_reducer);

	console.log(count_reducer);

	const [open, setOpen] = useState(true);

	const updateCounterItem = () => {
		dispatch(incrementValue(props.id));
	};

	return (
		<Modal size="sm" show={open} onHide={props.clickFunction} animation={false} aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Body className="text-center">
				<h4>Couldn’t update "{props.name}"</h4>
				<p>The Internet connection appears to be offline.</p>

				<Button
					variant="secondary"
					onClick={() => {
						updateCounterItem(props.id);
					}}
				>
					Retry
				</Button>
				<Button aria-label="Cancel" variant="primary" onClick={() => setOpen(false)}>
					Dismiss
				</Button>
			</Modal.Body>
		</Modal>
	);
};

export default UpdateCounterModalError;
