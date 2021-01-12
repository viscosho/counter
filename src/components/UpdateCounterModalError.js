import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import incrementValue from '../actions/incrementCountActions';

const UpdateCounterModalError = (props) => {
	const dispatch = useDispatch();

	const [open, setOpen] = useState(true);

	const updateCounterItem = () => {
		dispatch(incrementValue(props.id));
	};

	return (
		<Modal size="sm" show={open} onHide={props.clickFunction} animation={false} aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Body className="text-center">
				<h4>Couldn’t update "{props.name}"</h4>
				<p>The Internet connection appears to be offline.</p>
				<div className="d-flex justify-content-around">
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
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default UpdateCounterModalError;
