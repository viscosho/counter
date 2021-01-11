import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import deleteCounter from '../../../actions/deleteCounterActions';

const DeleteCounterModal = ({ id, name, modal, clickFunction }) => {
	const dispatch = useDispatch();

	const deleteCounterItem = () => {
		dispatch(deleteCounter(id));
		clickFunction();
	};

	return (
		<Modal size="sm" show={modal} onHide={clickFunction} animation={false} aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Body className="text-center">
				<h4>Delete the "{name}" counter?</h4>
				<p>This cannot be undone.</p>
				<Button aria-label="Cancel" variant="primary" onClick={clickFunction}>
					Cancel
				</Button>
				<Button
					variant="secondary"
					onClick={(id) => {
						deleteCounterItem(id);
					}}
				>
					Delete
				</Button>
			</Modal.Body>
		</Modal>
	);
};

export default DeleteCounterModal;
