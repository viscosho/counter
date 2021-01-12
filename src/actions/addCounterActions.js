import axios from 'axios';
import API_URL from '../utils/utils';

export const ADD_COUNTER_REQUEST = 'ADD_COUNTER_REQUEST';
export const ADD_COUNTER_SUCCESS = 'ADD_COUNTER_SUCCESS';
export const ADD_COUNTER_ERROR = 'ADD_COUNTER_ERROR';

export const addCounterRequest = () => {
	return {
		type: ADD_COUNTER_REQUEST
	};
};

export const addCounterSuccess = (response) => {
	return {
		type: ADD_COUNTER_SUCCESS,
		payload: response
	};
};

export const addCounterError = (error) => {
	return {
		type: ADD_COUNTER_ERROR,
		payload: error
	};
};

const createCounter = (title) => {
	return (dispatch) => {
		dispatch(addCounterRequest());
		axios
			.post(API_URL, { title: title })
			.then((response) => dispatch(addCounterSuccess(response.data)))
			.catch((error) => dispatch(addCounterError('No connection')));
	};
};

export default createCounter;
