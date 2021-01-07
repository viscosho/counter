import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Plus, Dash } from 'react-bootstrap-icons';
import CreateCounterModal from '../components/CreateCounterModal';
import DeleteCounterModal from '../components/DeleteCounterModal';

export const MainFooter = () => {
	const [openModal, setOpenModal] = useState(false);

	const handleClose = () => setOpenModal(false);

	const [openDeleteModal, setOpenDeleteModal] = useState(false);

	const handleDeleteClose = () => setOpenDeleteModal(false);

	return (
		<footer>
			<hr />
			<div className="d-flex justify-content-start">
				<Button className="pt-0 pb-0 pl-3 pr-3" onClick={() => setOpenDeleteModal(true)}>
					<Dash />
				</Button>
				<DeleteCounterModal modal={openDeleteModal} clickFunction={() => handleDeleteClose()} />
			</div>
			<div className="d-flex justify-content-end">
				<Button className="pt-0 pb-0 pl-3 pr-3" onClick={() => setOpenModal(true)}>
					<Plus />
				</Button>
				<CreateCounterModal modal={openModal} clickFunction={() => handleClose()} />
			</div>
		</footer>
	);
};
