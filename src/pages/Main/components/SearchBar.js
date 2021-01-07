import React from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = () => {
	return (
		<Form className="search-bar">
			<Form.Group controlId="formBasicEmail">
				<Form.Label className="d-none">Search</Form.Label>
				<Form.Control type="search" placeholder="Search Counters" />
			</Form.Group>
		</Form>
	);
};

export default SearchBar;
