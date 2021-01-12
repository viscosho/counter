import { FETCH_COUNT_ERROR, FETCH_COUNT_REQUEST, FETCH_COUNT_SUCCESS } from '../actions/fetchCountersActions';
import { INCREMENT_VALUE_ERROR, INCREMENT_VALUE_REQUEST, INCREMENT_VALUE_SUCCESS } from '../actions/incrementCountActions';
import { DECREMENT_VALUE_ERROR, DECREMENT_VALUE_REQUEST, DECREMENT_VALUE_SUCCESS } from '../actions/decrementCounterActions';
import { ADD_COUNTER_ERROR, ADD_COUNTER_REQUEST, ADD_COUNTER_SUCCESS } from '../actions/addCounterActions';
import { DELETE_COUNTER_ERROR, DELETE_COUNTER_REQUEST, DELETE_COUNTER_SUCCESS } from '../actions/deleteCounterActions';

const initialState = {
	loading: false,
	loadingChangeValue: false,
	loadingAddCounter: false,
	error: '',
	errorChangeValue: '',
	errorAddCounter: '',
	errorDeleteCounter: '',
	counts: null,
	message: ''
};

const count_reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_COUNT_REQUEST:
			return {
				...state,
				loading: true,
				message: 'Fetch count request'
			};
		case FETCH_COUNT_SUCCESS: {
			return {
				...state,
				loading: false,
				counts: action.payload === '' ? null : action.payload,
				message: 'Fetch count success'
			};
		}
		case FETCH_COUNT_ERROR: {
			return {
				...state,
				counts: null,
				error: action.payload,
				message: 'Fetch count error'
			};
		}

		case INCREMENT_VALUE_REQUEST: {
			return {
				...state,
				loadingChangeValue: true,
				message: 'Increment value request'
			};
		}

		case INCREMENT_VALUE_SUCCESS: {
			state.counts.map((objet) => {
				if (objet.id === action.payload.id) {
					objet.count = action.payload.count;
				}
				return null;
			});

			return {
				...state,
				loadingChangeValue: false,
				counts: state.counts,
				message: 'Increment value success'
			};
		}

		case INCREMENT_VALUE_ERROR: {
			return {
				...state,
				errorChangeValue: action.payload,
				message: 'Increment value error'
			};
		}

		case DECREMENT_VALUE_REQUEST: {
			return {
				...state,
				loadingChangeValue: true,
				message: 'Decrement value request'
			};
		}

		case DECREMENT_VALUE_SUCCESS: {
			state.counts.map((objet) => {
				if (objet.id === action.payload.id) {
					objet.count = action.payload.count;
				}
				return null;
			});

			return {
				...state,
				loadingChangeValue: false,
				counts: state.counts,
				message: 'Decrement value success'
			};
		}

		case DECREMENT_VALUE_ERROR: {
			return {
				...state,
				errorChangeValue: action.payload,
				message: 'Decrement value error'
			};
		}

		case ADD_COUNTER_REQUEST: {
			return {
				...state,
				loadingAddCounter: true,
				message: 'Add counter request'
			};
		}

		case ADD_COUNTER_SUCCESS: {
			return {
				...state,
				counts: state.counts.concat(action.payload),
				loadingAddCounter: false,
				message: 'Add counter success'
			};
		}

		case ADD_COUNTER_ERROR: {
			return {
				...state,
				loadingAddCounter: false,
				errorAddCounter: action.payload,
				message: 'Add counter error'
			};
		}

		case DELETE_COUNTER_REQUEST: {
			return {
				...state,
				message: 'Delete counter request'
			};
		}

		case DELETE_COUNTER_SUCCESS: {
			return {
				...state,
				counts: state.counts.filter((item) => item.id !== action.payload),
				message: 'Delete counter success'
			};
		}

		case DELETE_COUNTER_ERROR: {
			return {
				...state,
				errorDeleteCounter: action.payload,
				message: 'Delete counter error'
			};
		}

		default:
			return {
				state,
				message: 'Default'
			};
	}
};

export default count_reducer;
