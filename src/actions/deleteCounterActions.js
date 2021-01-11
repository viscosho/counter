import axios from 'axios';
import API_URL from '../utils/utils';

export const DELETE_COUNTER_REQUEST = 'DELETE_COUNTER_REQUEST';
export const DELETE_COUNTER_SUCCESS = 'DELETE_COUNTER_SUCCESS';
export const DELETE_COUNTER_ERROR = 'DELETE_COUNTER_ERROR';

export const deleteCounterRequest = () => {
	return {
		type: DELETE_COUNTER_REQUEST
	};
};

export const deleteCounterSuccess = (response) => {
	return {
		type: DELETE_COUNTER_SUCCESS,
		payload: response
	};
};

export const deleteCounterError = (error) => {
	return {
		type: DELETE_COUNTER_ERROR,
		payload: error
	};
};

const deleteCounter = (id) => {
	return (dispatch) => {
		dispatch(deleteCounterRequest());
		axios
			.delete(API_URL, {
				data: { id: id }
			})
			.then((response) => {
				dispatch(deleteCounterSuccess([response.data]));
			})
			.catch((error) => dispatch(deleteCounterError(`No connection ${error}`)));
	};
};

export default deleteCounter;
