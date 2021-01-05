import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { X } from 'react-bootstrap-icons';
import CreateCounter from '../../../components/CreateCounter/index';

const CreateCounterModal = ({ modal, clickFunction }) => {
	return (
		<Modal show={modal} onHide={clickFunction} animation={false} dialogClassName="modal-100w modal-100h">
			<Modal.Header closeButton>
				<Button className="modal-close" variant="secondary" onClick={clickFunction}>
					<X />
				</Button>
				<Modal.Title>
					<h2>Create a Counter</h2>
				</Modal.Title>
				<Button variant="primary" onClick={clickFunction}>
					Save
				</Button>
			</Modal.Header>
			<Modal.Body>
				<CreateCounter />
			</Modal.Body>
		</Modal>
	);
};

export default CreateCounterModal;
