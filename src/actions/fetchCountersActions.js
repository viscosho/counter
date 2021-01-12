import axios from 'axios';
import API_URL from '../utils/utils';

export const FETCH_COUNT_REQUEST = 'FETCH_COUNT_REQUEST';
export const FETCH_COUNT_SUCCESS = 'FETCH_COUNT_SUCCESS';
export const FETCH_COUNT_ERROR = 'FETCH_COUNT_ERROR';

export const fetchCountRequest = () => {
	return {
		type: FETCH_COUNT_REQUEST
	};
};

export const fetchCountSuccess = (response) => {
	return {
		type: FETCH_COUNT_SUCCESS,
		payload: response
	};
};

export const fetchCountError = (error) => {
	return {
		type: FETCH_COUNT_ERROR,
		payload: error
	};
};

const fetchCount = () => {
	return (dispatch) => {
		dispatch(fetchCountRequest());
		axios
			.get(API_URL)
			.then((response) => {
				dispatch(fetchCountSuccess(response.data));
			})
			.catch((error) => dispatch(fetchCountError('No connection')));
	};
};

export default fetchCount;
