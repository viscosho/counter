import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';

const NewExampleChip = () => {
	return (
		<Fragment>
			<div>
				<h3>Drinks</h3>
				<div className="chip-wrapper">
					<Button className="chip" variant="secondary">
						Cups of coffee
					</Button>
					<Button className="chip" variant="secondary">
						Glass of Watter
					</Button>
					<Button className="chip" variant="secondary">
						Martinis
					</Button>
				</div>
			</div>
			<div>
				<h3>Drinks</h3>
				<div className="chip-wrapper">
					<Button className="chip" variant="secondary">
						Cups of coffee
					</Button>
					<Button className="chip" variant="secondary">
						Glass of Watter
					</Button>
					<Button className="chip" variant="secondary">
						Martinis
					</Button>
				</div>
			</div>
		</Fragment>
	);
};

export default NewExampleChip;
