import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { DeleteCounter } from '../../../components/Api';

const DeleteCounterModal = ({ id, name, modal, clickFunction }) => {
	const deleteCounterItem = () => {
		DeleteCounter(id);
		clickFunction();
	};

	return (
		<Modal
			size="sm"
			show={modal}
			onHide={clickFunction}
			animation={false}
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Body className="text-center">
				<h4>Delete the "{name}" counter?</h4>
				<p>This cannot be undone.</p>
				<Button variant="primary" onClick={clickFunction}>
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
