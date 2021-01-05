import React from 'react';
import { Form } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';

const SearchBar = () => {
	return (
		<Form className="search">
			<Form.Group controlId="formBasicEmail">
				<Form.Label className="d-none">Search</Form.Label>
				<Search />
				<Form.Control type="search" placeholder="Search Counters" />
			</Form.Group>
		</Form>
	);
};

export default SearchBar;
