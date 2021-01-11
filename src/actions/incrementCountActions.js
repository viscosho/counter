import axios from 'axios';
import API_URL from '../utils/utils';

export const INCREMENT_VALUE_REQUEST = 'INCREMENT_VALUE_REQUEST';
export const INCREMENT_VALUE_SUCCESS = 'INCREMENT_VALUE_SUCCESs';
export const INCREMENT_VALUE_ERROR = 'INCREMENT_VALUE_ERROR';

export const incrementValueRequest = () => {
	return {
		type: INCREMENT_VALUE_REQUEST
	};
};

export const incrementValueSuccess = (response) => {
	return {
		type: INCREMENT_VALUE_SUCCESS,
		payload: response
	};
};

export const incrementValueError = (error) => {
	return {
		type: INCREMENT_VALUE_ERROR,
		payload: error
	};
};

const incrementValue = (item) => {
	return (dispatch) => {
		dispatch(incrementValueRequest());
		axios
			.post(`${API_URL}/inc/`, { id: item })
			.then((response) => dispatch(incrementValueSuccess([response.data])))
			.catch((error) => dispatch(incrementValueError(`No connection, error: ${error}`)));
	};
};

export default incrementValue;
