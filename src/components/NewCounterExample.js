import React, { Fragment } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { X } from 'react-bootstrap-icons';

const NewCounterExample = (props) => {
	const exampleChips = [
		{ name: 'Drinks', chips: [{ title: 'Cups of coffee' }, { title: 'Glasses of water' }, { title: 'Martinis' }] },
		{ name: 'Food', chips: [{ title: 'Hot-dogs' }, { title: 'Cupcakes eaten' }, { title: 'Chicken wings' }] },
		{ name: 'Misc', chips: [{ title: 'Times sneezed' }, { title: 'Naps' }, { title: 'Daydreaming' }] }
	];

	const handleClick = (value) => {
		props.parentCallback(value);
		props.clickFunction();
	};

	return (
		<Modal
			show={props.exampleModal}
			onHide={() => {
				props.clickFunction();
			}}
			animation={false}
			dialogClassName="modal-100w modal-100h"
		>
			<Modal.Header closeButton>
				<Button
					aria-label="Close"
					className="modal-close"
					variant="secondary"
					onClick={() => {
						props.clickFunction();
					}}
				>
					<X />
				</Button>
				<Modal.Title>
					<h2>Examples</h2>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>Select an example to add it to your counters.</p>
				<Fragment>
					{exampleChips.map((chip) => (
						<Fragment key={chip.name}>
							<div className="chip-wrapper">
								<h5>{chip.name}</h5>
								{chip.chips.map((chip) => (
									<Button
										key={chip.title}
										className="chip"
										variant="secondary"
										aria-pressed="true"
										onClick={() => {
											handleClick(chip.title);
										}}
									>
										{chip.title}
									</Button>
								))}
							</div>
						</Fragment>
					))}
				</Fragment>
			</Modal.Body>
		</Modal>
	);
};

export default NewCounterExample;
