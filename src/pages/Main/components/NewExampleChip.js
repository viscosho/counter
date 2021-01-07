import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';

const NewExampleChip = () => {
	const exampleChips = [
		{ name: 'Drinks', chips: [{ title: 'Cups of coffee' }, { title: 'Glasses of water' }, { title: 'Martinis' }] },
		{ name: 'Food', chips: [{ title: 'Hot-dogs' }, { title: 'Cupcakes eaten' }, { title: 'Chicken wings' }] },
		{ name: 'Misc', chips: [{ title: 'Times sneezed' }, { title: 'Naps' }, { title: 'Daydreaming' }] }
	];

	return (
		<Fragment>
			{exampleChips.map((chip) => (
				<Fragment>
					<div className="chip-wrapper">
						<h5>{chip.name}</h5>
						{chip.chips.map((chip) => (
							<Button className="chip" variant="secondary">
								{chip.title}
							</Button>
						))}
					</div>
				</Fragment>
			))}
		</Fragment>
	);
};

export default NewExampleChip;
