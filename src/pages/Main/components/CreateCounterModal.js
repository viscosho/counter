import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { X } from 'react-bootstrap-icons';
import NewCounterExample from './NewCounterExample';
import { CreateCounter } from '../../../components/Api';

const CreateCounterModal = ({ modal, clickFunction, value }) => {
	const [openExampleModal, setOpenExampleModal] = useState(false);
	const [counterValue, setCounterValue] = useState('');

	const handleExampleClose = () => {
		setOpenExampleModal(false);
	};

	const addCounter = () => {
		CreateCounter(counterValue);
		clickFunction();
	};

	const callback = (value) => {
		console.log(value);
		setCounterValue(value);
	};

	useEffect(() => {}, [counterValue]);

	return (
		<Modal show={modal} onHide={clickFunction} animation={false} dialogClassName="modal-100w modal-100h">
			<Modal.Header closeButton>
				<Button aria-label="Close" className="modal-close" variant="secondary" onClick={clickFunction}>
					<X />
				</Button>
				<Modal.Title>
					<h2>Create a Counter</h2>
				</Modal.Title>
				<Button
					aria-label="Save"
					variant="primary"
					value={counterValue || ''}
					onClick={(e) => {
						addCounter(e.target.value);
					}}
				>
					Save
				</Button>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group controlId="newCounter">
						<Form.Label>
							<h4>Name</h4>
						</Form.Label>
						<Form.Control
							type="text"
							value={counterValue || ''}
							onChange={(e) => {
								setCounterValue(e.target.value);
							}}
							placeholder="Cups of Coffee"
						/>

						<Form.Text className="text-muted">
							Give it a name. Creative block?
							<Button
								aria-label="See Examples"
								className="no-shadow p-0 m-0"
								variant="link"
								onClick={() => setOpenExampleModal(true)}
							>
								See examples
							</Button>
							<NewCounterExample
								exampleModal={openExampleModal}
								parentCallback={() => callback(value)}
								clickFunction={() => handleExampleClose()}
							/>
						</Form.Text>
					</Form.Group>
				</Form>
			</Modal.Body>
		</Modal>
	);
};

export default CreateCounterModal;
