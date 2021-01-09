import React from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
	const handleSearch = (event) => {
		console.log(event.target.value);
		// const { value } = event.target;
		// setSearchValue(value);
		// const response = getArrayFiltered({
		//   value: value,
		//   array: counters,
		//   key: 'title',
		// });
		// onSearch(response);
	};

	return (
		<Form className="search-bar">
			<Form.Group controlId="formBasicEmail">
				<Form.Label className="d-none">Search</Form.Label>
				<Form.Control type="search" placeholder="Search Counters" onChange={handleSearch} />
			</Form.Group>
		</Form>
	);
};

export default SearchBar;
