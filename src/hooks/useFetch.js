import { useState, useEffect } from 'react';

export const useFetch = (page, url) => {
	const [dataState, setDataState] = useState({ data: [], loading: true });

	useEffect(() => {
		setDataState({ data: [], loading: true });
		fetch(url, {
			headers: {
				'Content-Type': 'application/json',
				method: 'GET'
			}
		})
			.then((response) => {
				if (!response.ok) {
					throw response;
				}
				return response.json();
			})
			.then((json) => setDataState({ data: json, loading: false }));
	}, [page, url]);

	return dataState;
};
