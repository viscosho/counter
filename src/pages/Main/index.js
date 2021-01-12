import React, { useState, useEffect, Fragment } from 'react';
import fetchCount from '../../actions/fetchCountersActions';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup, Button, Container, Row, Col } from 'react-bootstrap';
import { Plus, Trash } from 'react-bootstrap-icons';
import LoadingScreen from '../../components/LoadingScreen';
import SearchBar from '../../components/SearchBar';
import CounterList from '../../components/CounterList';
import NoCounters from '../../components/NoCounters';
import NoConnection from '../../components/NoConnection';
import CreateCounterModal from '../../components/CreateCounterModal';
import DeleteCounterModal from '../../components/DeleteCounterModal';
import DeleteCounterModalError from '../../components/DeleteCounterModalError';
import ListRecap from '../../components/ListRecap';
import { CopyPopover } from '../../components/CopyPopover';

const Main = () => {
	const dispatch = useDispatch();
	const count_reducer = useSelector((state) => state.api_reducer);

	//console.log(count_reducer);

	useEffect(() => {
		dispatch(fetchCount());
	}, [dispatch]);

	const [search, setSearch] = useState('');
	const [searchState, setSearchState] = useState(false);
	const [filteredCounters, setfilteredCounters] = useState([]);
	const [totalItemCount, setTotalItemCount] = useState(0);
	const [itemSelectedId, setItemSelectedId] = useState();
	const [itemSelectedName, setItemSelectedName] = useState('');
	const [copyButtonText, setCopyButtonText] = useState('Copy');
	const [openModal, setOpenModal] = useState(false);
	const [openDeleteModal, setOpenDeleteModal] = useState(false);

	const handleClose = () => {
		setOpenModal(false);
	};
	const handleDeleteClose = () => {
		setOpenDeleteModal(false);
	};

	const handleIncDec = (id, name) => {
		setItemSelectedId(id);
		setItemSelectedName(name);
	};

	const handleShare = () => {
		navigator.clipboard
			.writeText(itemSelectedName)
			.then(() => {
				setCopyButtonText('Copied!');
			})
			.catch((err) => {
				console.log('Something went wrong', err);
			});
	};

	const handleSearch = (event) => {
		setSearch(event);
		if (event) {
			setSearchState(true);
		}
	};

	useEffect(() => {
		if (count_reducer.counts) {
			setfilteredCounters(count_reducer.counts.filter((counter) => counter.title.toLowerCase().includes(search.toLowerCase())));
			const totalItemCount = count_reducer.counts.reduce((total, item) => {
				return total + item.count;
			}, 0);
			setTotalItemCount(totalItemCount);
		}
	}, [search, count_reducer]);

	return (
		<Fragment>
			<Container id="main" className="pt-3 pb-3">
				<Row id="main-row" className="d-flex flex-column align-content-stretch flex-wrap">
					<Col id="main-header" className="d-flex flex-column justify-content-center text-center">
						<header>
							<SearchBar onChange={(value) => handleSearch(value)} />
						</header>
					</Col>
					<Col id="main-body">
						{count_reducer.loading && !count_reducer.error ? <LoadingScreen /> : null}
						{count_reducer.error ? <NoConnection /> : null}
						{!count_reducer.loading ? (
							<section>
								<ListGroup>
									{count_reducer.counts && count_reducer.counts.length ? (
										<Fragment>
											<ListRecap data={count_reducer.counts} total={totalItemCount} />
											{!searchState
												? count_reducer.counts.map((singleCounter) => (
														<CounterList
															handleClick={() => {
																handleIncDec(singleCounter.id, singleCounter.title);
															}}
															key={singleCounter.id}
															item={singleCounter}
														/>
												  ))
												: filteredCounters.map((singleCounter) => (
														<CounterList
															handleClick={() => {
																handleIncDec(singleCounter.id, singleCounter.title);
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
							</section>
						) : null}
					</Col>
					<Col>
						<footer>
							<hr />
							<Container>
								<Row>
									{itemSelectedId ? (
										<Col xs={8}>
											<div className="d-flex justify-content-start">
												<Row>
													<Col>
														<Button aria-label="Delete Counter" variant="light" className="d-flex pl-3 pr-3" onClick={() => setOpenDeleteModal(true)}>
															<Trash color="red" />
														</Button>
														<DeleteCounterModal
															id={itemSelectedId}
															name={itemSelectedName}
															modal={openDeleteModal}
															clickFunction={() => handleDeleteClose()}
														/>
														{count_reducer.errorDeleteCounter && <DeleteCounterModalError name={itemSelectedName} modal={openDeleteModal} />}
													</Col>
													<Col>
														<CopyPopover handleSelected={() => handleShare()} text={copyButtonText} itemSelected={itemSelectedName} />
													</Col>
												</Row>
											</div>
										</Col>
									) : null}
									<Col>
										<div className="d-flex justify-content-end">
											<Button aria-label="Create Counter" className="d-flex pl-3 pr-3" onClick={() => setOpenModal(true)}>
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
		</Fragment>
	);
};

export default Main;
