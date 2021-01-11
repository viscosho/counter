import React, { useState, useEffect, useCallback, Fragment } from 'react';
import { ListGroup, Button, Container, Row, Col } from 'react-bootstrap';
import { Plus, Trash } from 'react-bootstrap-icons';
import LoadingScreen from './components/LoadingScreen';
import SearchBar from './components/SearchBar';
import CounterList from './components/CounterList';
import NoCounters from './components/NoCounters';
import CreateCounterModal from './components/CreateCounterModal';
import DeleteCounterModal from './components/DeleteCounterModal';
import { useFetch } from '../../hooks/useFetch';
import ListRecap from './components/ListRecap';
import { CopyPopover } from './components/CopyPopover';

const Main = () => {
	const API_URL = `http://${window.location.hostname}:3001/api/v1/counter`;

	const [page, setPage] = useState(1);
	const { data, loading } = useFetch(page, API_URL);

	const [search, setSearch] = useState('');
	const [searchState, setSearchState] = useState(false);

	const [filteredCountries, setFilteredCountries] = useState([]);
	const [totalItemCount, setTotalItemCount] = useState(0);
	const [itemSelectedId, setItemSelectedId] = useState();
	const [itemSelectedName, setItemSelectedName] = useState('');
	const [copyButtonText, setCopyButtonText] = useState('Copy');
	const [openModal, setOpenModal] = useState(false);
	const [openDeleteModal, setOpenDeleteModal] = useState(false);

	const reloadCounters = () => {
		setPage(page + 1);
		//console.log('Reload counter running');
	};
	const handleClose = () => {
		setOpenModal(false);
		reloadCounters();
		//console.log('Handle Close running');
	};
	const handleDeleteClose = () => {
		setOpenDeleteModal(false);
		reloadCounters();
		//console.log('Handle Delete running');
	};

	/**
	 *
	 * @param {*} id item Id
	 * @param {*} name item name
	 * @param {*} operation operation type
	 */
	const handleIncDec = (id, name, operation) => {
		setItemSelectedId(id);
		setItemSelectedName(name);

		if (operation === 'inc') {
			setTotalItemCount(totalItemCount + 1);
		} else if (operation === 'dec') {
			setTotalItemCount(totalItemCount - 1);
		}
		//console.log('Addition running');
	};

	const calculateTotal = (data) => {
		const totalItemCount = data.reduce((total, item) => {
			return total + item.count;
		}, 0);
		setTotalItemCount(totalItemCount);
		//console.log('Calculate Total running');
	};

	const handleShare = () => {
		navigator.clipboard
			.writeText(itemSelectedName)
			.then(() => {
				//console.log('Copied!');
				setCopyButtonText('Copied!');
			})
			.catch((err) => {
				//console.log('Something went wrong', err);
			});
	};
	const handleSearch = (event) => {
		setSearch(event);
		if (event) {
			setSearchState(true);
		}
	};

	const fetchBusinesses = useCallback(() => {
		calculateTotal(data);
	}, [data]);

	useEffect(() => {
		fetchBusinesses();
		//console.log('Use Effect running');
	}, [page, fetchBusinesses]);

	useEffect(() => {
		setFilteredCountries(data.filter((counter) => counter.title.toLowerCase().includes(search.toLowerCase())));
		// console.log(filteredCountries);
		// console.log(searchState);
	}, [search, data]);

	return (
		<Fragment>
			{!loading ? (
				<Container id="main" className="pt-3 pb-3">
					<Row id="main-row" className="d-flex flex-column align-content-stretch flex-wrap">
						<Col id="main-header" className="d-flex flex-column justify-content-center text-center">
							<header>
								<SearchBar onChange={(value) => handleSearch(value)} />
							</header>
						</Col>
						<Col id="main-body">
							<section>
								{
									<ListGroup>
										{data.length ? (
											<Fragment>
												<ListRecap data={data} total={totalItemCount} />
												{!searchState
													? data.map((singleCounter) => (
															<CounterList
																handleClick={(operation) => {
																	handleIncDec(singleCounter.id, singleCounter.title, operation);
																}}
																key={singleCounter.id}
																item={singleCounter}
															/>
													  ))
													: filteredCountries.map((singleCounter) => (
															<CounterList
																handleClick={(operation) => {
																	handleIncDec(singleCounter.id, singleCounter.title, operation);
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
										{itemSelectedId ? (
											<Col>
												<div className="d-flex justify-content-start">
													<Row>
														<Col>
															<Button
																aria-label="Delete Counter"
																variant="light"
																className="d-flex pl-3 pr-3"
																onClick={() => setOpenDeleteModal(true)}
															>
																<Trash color="red" />
															</Button>
															<DeleteCounterModal
																id={itemSelectedId}
																name={itemSelectedName}
																modal={openDeleteModal}
																clickFunction={() => handleDeleteClose()}
															/>
														</Col>
														<Col>
															<CopyPopover
																handleSelected={() => handleShare()}
																text={copyButtonText}
																itemSelected={itemSelectedName}
															/>
														</Col>
													</Row>
												</div>
											</Col>
										) : null}
										<Col>
											<div className="d-flex justify-content-end">
												<Button
													aria-label="Create Counter"
													className="d-flex pl-3 pr-3"
													onClick={() => setOpenModal(true)}
												>
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
			) : (
				<LoadingScreen />
			)}
		</Fragment>
	);
};

export default Main;
