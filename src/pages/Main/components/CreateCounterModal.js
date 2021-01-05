import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CreateCounterModal = ({ modal, clickFunction }) => {
	return (
		<Modal show={modal} onHide={clickFunction} animation={false}>
			<Modal.Header closeButton>
				<Modal.Title>Modal heading</Modal.Title>
				<Button variant="secondary" onClick={clickFunction}>
					Close
				</Button>
			</Modal.Header>
			<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
		</Modal>
	);
};

export default CreateCounterModal;
