import { useState, useEffect, useRef } from 'react';

export const useFetch = (page, url) => {
	//const isCurrent = useRef(true);
	const [dataState, setDataState] = useState({ data: [], loading: true });

	// useEffect(() => {
	// 	return () => {
	// 		isCurrent.current = false;
	// 	};
	// }, []);

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
			.then((json) => {
				//setTimeout(() => {
				//if (isCurrent.current) {
				setDataState({ data: json, loading: false });
				//}

				//}, 1000);
			});
	}, [page, url, setDataState]);

	return dataState;
};
