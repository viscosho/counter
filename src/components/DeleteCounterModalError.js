import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import deleteCounter from '../actions/deleteCounterActions';

const DeleteCounterModalError = (props) => {
	const dispatch = useDispatch();

	const [open, setOpen] = useState(true);

	const deleteCounterItem = () => {
		dispatch(deleteCounter(props.id));
		setOpen(false);
	};

	return (
		<Modal size="sm" show={open} onHide={props.clickFunction} animation={false} aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Body className="text-center">
				<h4>Couldn’t delete "{props.name}"</h4>
				<p>The Internet connection appears to be offline.</p>

				<Button
					variant="secondary"
					onClick={() => {
						deleteCounterItem(props.id);
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

export default DeleteCounterModalError;
