import React, { useReducer, useState, useEffect, useCallback, Fragment } from 'react';
import { reducer, initialState, initialCount } from '../../components/Reducer';
import { ListGroup, Button, Container, Row, Col } from 'react-bootstrap';
import { Plus, Trash } from 'react-bootstrap-icons';
import { GetCounterList } from './../../components/Api';
import SearchBar from './components/SearchBar';
import CounterList from './components/CounterList';
import NoCounters from './components/NoCounters';
import CreateCounterModal from './components/CreateCounterModal';
import DeleteCounterModal from './components/DeleteCounterModal';

const Main = ({ initialCount }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [counters, setCounters] = useState(0);
	const [counterList, setCounterList] = useState([]);
	const [count, setCount] = useState(0);
	const [itemSelected, setItemSelected] = useState();
	const [openModal, setOpenModal] = useState(false);
	const handleClose = () => setOpenModal(false);
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const handleDeleteClose = () => setOpenDeleteModal(false);

	const increment = (id) => {
		//setCount(count + 1);
		//let countTotals = counterList.map((eachCounter) => setCount(countTotals + eachCounter.count));

		//	const countTotals = counterList.reduce((totalCalories, eachCounter) => totalCalories + eachCounter.count, 0);
		//setCount(countTotals);
		setItemSelected(id);
		//console.log(countTotals);
	};

	const getPosts = () => {
		GetCounterList().then((json) => {
			setCounters(json.length);
			setCounterList(json);
			const countTotal = counterList.reduce((totalCalories, eachCounter) => totalCalories + eachCounter.count, 0);
			setCount(countTotal);
		});
	};

	const fetchBusinesses = useCallback(() => {
		//const interval = setInterval(() => {
		getPosts();
		//}, 5000);
		//return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		fetchBusinesses();
	}, [fetchBusinesses, state]);

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		getPosts();
	// 	}, 5000);
	// 	return () => clearInterval(interval);
	// 	//getPosts();
	// 	//console.log(itemSelected);
	// }, [count, itemSelected, getPosts]);

	return (
		<Container id="main" className="pt-3 pb-3">
			Count: {state.count}
			<button onClick={() => dispatch({ type: 'decrement' })}>-</button>
			<button onClick={() => dispatch({ type: 'increment' })}>+</button>
			<button onClick={() => dispatch({ type: 'reset', payload: initialCount })}>Reset</button>
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
				</Col>
				<Col>
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
				</Col>
			</Row>
		</Container>
	);
};

export default Main;
