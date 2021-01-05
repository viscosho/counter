import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Plus } from 'react-bootstrap-icons';
import CreateCounterModal from '../components/CreateCounterModal';

export const MainFooter = () => {
	const [openModal, setOpenModal] = useState(false);

	const handleClose = () => setOpenModal(false);

	console.log(openModal);

	return (
		<footer>
			<hr />
			<div className="d-flex justify-content-end">
				<Button className="pt-0 pb-0 pl-3 pr-3" onClick={() => setOpenModal(true)}>
					<Plus style={{ fontSize: '2rem' }} />
				</Button>
				<CreateCounterModal modal={openModal} clickFunction={() => handleClose()} />
			</div>
		</footer>
	);
};
