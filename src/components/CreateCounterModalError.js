import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const CreateCounterModalError = (props) => {
	const [open, setOpen] = useState(true);

	return (
		<Modal size="sm" show={open} onHide={props.clickFunction} animation={false} aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Body className="text-center">
				<h4>Couldn’t create counter</h4>
				<p>The Internet connection appears to be offline.</p>
				<div className="d-flex justify-content-center">
					<Button aria-label="Cancel" variant="primary" onClick={() => setOpen(false)}>
						Dismiss
					</Button>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default CreateCounterModalError;
