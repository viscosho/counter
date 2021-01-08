import React, { useState, useEffect, Fragment } from 'react';
import { ListGroup, Button, Container, Row, Col } from 'react-bootstrap';
import { Plus, Trash } from 'react-bootstrap-icons';
import { GetCounterList } from './../../components/Api';
import SearchBar from './components/SearchBar';
import CounterList from './components/CounterList';
import NoCounters from './components/NoCounters';
import CreateCounterModal from './components/CreateCounterModal';
import DeleteCounterModal from './components/DeleteCounterModal';

const Main = () => {
	const [counters, setCounters] = useState(0);
	const [counterList, setCounterList] = useState([]);
	const [count, setCount] = useState(0);
	const [itemSelected, setItemSelected] = useState();
	const [openModal, setOpenModal] = useState(false);
	const handleClose = () => setOpenModal(false);
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const handleDeleteClose = () => setOpenDeleteModal(false);

	const increment = (id) => {
		setCount(count + 1);
		setItemSelected(id);
	};

	const getPosts = () => {
		GetCounterList().then((json) => {
			setCounters(json.length);
			setCounterList(json);
		});
	};

	useEffect(() => {
		// const interval = setInterval(() => {
		// 	getPosts();
		// }, 5000);
		// return () => clearInterval(interval);
		getPosts();
		//console.log(itemSelected);
	}, [itemSelected]);

	return (
		<Container id="main" className="pt-3 pb-3">
			<Row id="main-row" className="d-flex flex-column align-content-stretch flex-wrap">
				<Col id="main-header" className="d-flex flex-column justify-content-center text-center">
					<header>
						<SearchBar />
					</header>
				</Col>
				<Col id="main-body">
					<Fragment>
						<section>
							{
								<ListGroup>
									{counters ? (
										<Fragment>
											<p>
												{counters} items <span>{count} times</span>
											</p>
											{counterList.map((singleCounter) => (
												<CounterList
													handleClick={() => {
														increment(singleCounter.id);
													}}
													key={singleCounter.id}
													item={singleCounter}
												/>
											))}
										</Fragment>
									) : (
										<NoCounters />
									)}
								</ListGroup>
							}
						</section>
						<footer>
							<hr />
							<Container>
								<Row>
									{itemSelected ? (
										<Col>
											<div className="d-flex justify-content-start">
												<Button className="pt-0 pb-0 pl-3 pr-3" onClick={() => setOpenDeleteModal(true)}>
													<Trash />
												</Button>
												<DeleteCounterModal
													id={itemSelected}
													modal={openDeleteModal}
													clickFunction={() => handleDeleteClose()}
												/>
											</div>
										</Col>
									) : null}

									<Col>
										<div className="d-flex justify-content-end">
											<Button className="pt-0 pb-0 pl-3 pr-3" onClick={() => setOpenModal(true)}>
												<Plus />
											</Button>

											<CreateCounterModal modal={openModal} clickFunction={() => handleClose()} />
										</div>
									</Col>
								</Row>
							</Container>
						</footer>
					</Fragment>
				</Col>
			</Row>
		</Container>
	);
};

export default Main;
