import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';

const SearchBar = (props) => {
	const count_reducer = useSelector((state) => state.api_reducer);

	const [enabled, setEnabled] = useState(false);

	useEffect(() => {
		if (count_reducer.counts) {
			if (count_reducer.counts.length === 0) {
				setEnabled(true);
			} else {
				setEnabled(false);
			}
		}
	}, [count_reducer]);

	return (
		<Form className="search-bar">
			<Form.Group controlId="formBasicEmail">
				<Form.Label className="d-none">Search</Form.Label>
				<Form.Control
					disabled={enabled}
					type="search"
					aria-label="Search"
					placeholder="&#128269; Search Counters"
					onChange={(event) => {
						props.onChange(event.target.value);
					}}
				/>
			</Form.Group>
		</Form>
	);
};

export default SearchBar;
