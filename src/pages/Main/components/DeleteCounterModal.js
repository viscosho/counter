import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const DeleteCounterModal = ({ modal, clickFunction }) => {
	return (
		<Modal show={modal} onHide={clickFunction} animation={false}>
			<Modal.Header closeButton></Modal.Header>
			<Modal.Title>
				<h2>Delete the “Records played” counter?</h2>
			</Modal.Title>
			<Modal.Body>
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
