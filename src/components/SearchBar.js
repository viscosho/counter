import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

const SearchBar = (props) => {
	const count_reducer = useSelector((state) => state.api_reducer);

	const [enabled, setEnabled] = useState(false);
	const [focused, setFocused] = useState(false);
	const [value, setValue] = useState(false);

	const enableCancelButton = () => {
		setFocused(true);
	};

	const handleCancel = () => {
		setValue(true);
	};

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
		<Form className="search-bar d-flex">
			<Form.Group controlId="search" className="mb-0">
				<Form.Label className="d-none">Search</Form.Label>
				<Form.Control
					disabled={enabled}
					type="search"
					aria-label="Search"
					placeholder="&#128269; Search Counters"
					onFocus={() => enableCancelButton()}
					onChange={(event) => {
						props.onChange(event.target.value);
					}}
				/>
			</Form.Group>
			{focused && (
				<Button variant="light" className="ml-3" onClick={() => handleCancel()}>
					Cancel
				</Button>
			)}
		</Form>
	);
};

export default SearchBar;
