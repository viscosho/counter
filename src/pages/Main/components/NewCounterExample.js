import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { X } from 'react-bootstrap-icons';
import NewExampleChip from './NewExampleChip';

const NewCounterExample = ({ exampleModal, clickFunction }) => {
	return (
		<Modal show={exampleModal} onHide={clickFunction} animation={false} dialogClassName="modal-100w modal-100h">
			<Modal.Header closeButton>
				<Button aria-label="Close" className="modal-close" variant="secondary" onClick={clickFunction}>
					<X />
				</Button>
				<Modal.Title>
					<h2>Examples</h2>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>Select an example to add it to your counters.</p>
				<NewExampleChip />
			</Modal.Body>
		</Modal>
	);
};

export default NewCounterExample;
