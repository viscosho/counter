import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const DeleteCounterModal = ({ modal, clickFunction }) => {
	return (
		<Modal size="sm" show={modal} onHide={clickFunction} animation={false} aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Body className="text-center">
				<h3>Delete the “Records played” counter?</h3>
				<p>This cannot be undone.</p>
				<Button variant="primary" onClick={clickFunction}>
					Cancel
				</Button>
				<Button variant="secondary">Delete</Button>
			</Modal.Body>
		</Modal>
	);
};

export default DeleteCounterModal;
