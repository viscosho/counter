import React from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = (props) => {
	return (
		<Form className="search-bar">
			<Form.Group controlId="formBasicEmail">
				<Form.Label className="d-none">Search</Form.Label>
				<Form.Control
					disabled={false}
					type="search"
					aria-label="Search"
					placeholder="Search Counters"
					onChange={(event) => {
						props.onChange(event.target.value);
					}}
				/>
			</Form.Group>
		</Form>
	);
};

export default SearchBar;
