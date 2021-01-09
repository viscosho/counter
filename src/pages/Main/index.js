import React, { useState, useEffect, Fragment } from 'react';
import paper from '../../assets/img/paper_note.svg';
import { ListGroup, Button, Container, Row, Col, OverlayTrigger, Popover, Image } from 'react-bootstrap';
import { Plus, Trash, BoxArrowInUp } from 'react-bootstrap-icons';
import { GetCounterList } from './../../components/Api';
import SearchBar from './components/SearchBar';
import CounterList from './components/CounterList';
import NoCounters from './components/NoCounters';
import CreateCounterModal from './components/CreateCounterModal';
import DeleteCounterModal from './components/DeleteCounterModal';

const Main = () => {
	const [page, setPage] = useState(1);

	const [counters, setCounters] = useState(0);
	const [counterList, setCounterList] = useState([]);
	//const [count, setCount] = useState(0);
	const [itemSelected, setItemSelected] = useState();
	const [openModal, setOpenModal] = useState(false);
	const [openDeleteModal, setOpenDeleteModal] = useState(false);

	const reloadCounters = () => {
		setPage(page + 1);
		console.log('Reload counter running');
	};

	const handleClose = () => {
		setOpenModal(false);
		reloadCounters();
		console.log('Handle Close running');
	};
	const handleDeleteClose = () => {
		setOpenDeleteModal(false);
		reloadCounters();
		console.log('Handle Delete running');
	};

	const increment = (id) => {
		setItemSelected(id);
		console.log('Increment running');
	};

	const getPosts = async () => {
		GetCounterList().then((json) => {
			setCounters(json.length);
			setCounterList(json);
			console.log('Get post running');
			// const countTotal = counterList.reduce((totalCalories, eachCounter) => totalCalories + eachCounter.count, 0);
			// setCount(countTotal);
		});
	};

	useEffect(() => {
		const fetchBusinesses = () => {
			getPosts();
		};
		fetchBusinesses();
	}, [page]);

	return (
		<Container id="main" className="pt-3 pb-3">
			<Row id="main-row" className="d-flex flex-column align-content-stretch flex-wrap">
				<Col id="main-header" className="d-flex flex-column justify-content-center text-center">
					<header>
						<SearchBar />
					</header>
				</Col>
				<Col id="main-body">
					<section>
						{
							<ListGroup>
								{counters ? (
									<Fragment>
										{/* <p>
											{counters} items <span>{count} times</span>
										</p> */}
										<p>{counters} items</p>
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
				</Col>
				<Col>
					<footer>
						<hr />
						<Container>
							<Row>
								{itemSelected ? (
									<Col>
										<div className="d-flex justify-content-start">
											<Row>
												<Col>
													<Button variant="light" className="d-flex pl-3 pr-3" onClick={() => setOpenDeleteModal(true)}>
														<Trash color="red" />
													</Button>
													<DeleteCounterModal
														id={itemSelected}
														modal={openDeleteModal}
														clickFunction={() => handleDeleteClose()}
													/>
												</Col>
												<Col>
													<OverlayTrigger
														rootClose
														trigger="click"
														key="top"
														placement="top"
														transition={false}
														overlay={
															<Popover id={`popover-positioned-top`} className="share-popover">
																<Popover.Content>
																	<Row>
																		<Col>
																			<p>
																				<strong>Share 1 counter</strong>
																			</p>
																			<Button variant="light">Copy</Button>
																		</Col>
																		<Col>
																			<Image src={paper} alt="Share" />
																		</Col>
																	</Row>
																</Popover.Content>
															</Popover>
														}
													>
														{({ ...triggerHandler }) => (
															<Button className="d-flex pl-3 pr-3" variant="light" {...triggerHandler}>
																<BoxArrowInUp />
															</Button>
														)}
													</OverlayTrigger>
												</Col>
											</Row>
										</div>
									</Col>
								) : null}

								<Col>
									<div className="d-flex justify-content-end">
										<Button className="d-flex pl-3 pr-3" onClick={() => setOpenModal(true)}>
											<Plus />
										</Button>

										<CreateCounterModal modal={openModal} clickFunction={() => handleClose()} />
									</div>
								</Col>
							</Row>
						</Container>
					</footer>
				</Col>
			</Row>
		</Container>
	);
};

export default Main;
