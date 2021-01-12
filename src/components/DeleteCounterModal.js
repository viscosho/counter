import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import deleteCounter from '../actions/deleteCounterActions';

const DeleteCounterModal = (props) => {
	const dispatch = useDispatch();

	const deleteCounterItem = () => {
		dispatch(deleteCounter(props.id));
		props.clickFunction();
	};

	return (
		<Modal size="sm" show={props.modal} onHide={props.clickFunction} animation={false} aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Body className="text-center">
				<h4>Delete the "{props.name}" counter?</h4>
				<p>This cannot be undone.</p>
				<div className="d-flex justify-content-around">
					<Button aria-label="Cancel" variant="primary" onClick={props.clickFunction}>
						Cancel
					</Button>
					<Button
						variant="light"
						className="danger-text"
						onClick={() => {
							deleteCounterItem(props.id);
						}}
					>
						Delete
					</Button>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default DeleteCounterModal;
