import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import NewCounterExample from './NewCounterExample';

const NewCounterInput = () => {
	const [openExampleModal, setOpenExampleModal] = useState(false);

	const handleExampleClose = () => setOpenExampleModal(false);

	return (
		<Form>
			<Form.Group controlId="formBasicEmail">
				<Form.Label>
					<h4>Name</h4>
				</Form.Label>
				<Form.Control type="email" placeholder="Cups of Coffee" />
				<Form.Text className="text-muted">
					Give it a name. Creative block?
					<Button className="no-shadow p-0 m-0" variant="link" onClick={() => setOpenExampleModal(true)}>
						See examples
					</Button>
					<NewCounterExample exampleModal={openExampleModal} clickFunction={() => handleExampleClose()} />.
				</Form.Text>
			</Form.Group>
		</Form>
	);
};

export default NewCounterInput;
