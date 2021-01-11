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
	counts: []
};

const count_reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_COUNT_REQUEST:
			return {
				...state,
				loading: true
			};
		case FETCH_COUNT_SUCCESS: {
			return {
				...state,
				loading: false,
				counts: action.payload[0] === '' ? [] : action.payload
			};
		}
		case FETCH_COUNT_ERROR: {
			return {
				...state,
				counts: [],
				error: action.payload
			};
		}

		case INCREMENT_VALUE_REQUEST: {
			return {
				...state,
				loadingChangeValue: true
			};
		}

		case INCREMENT_VALUE_SUCCESS: {
			state.counts[0].map((objet) => {
				if (objet.id === action.payload[0].id) {
					objet.count = action.payload[0].count;
				}
			});

			return {
				...state,
				loadingChangeValue: false,
				counts: state.counts
			};
		}

		case INCREMENT_VALUE_ERROR: {
			return {
				...state,
				errorChangeValue: action.payload
			};
		}

		case DECREMENT_VALUE_REQUEST: {
			return {
				...state,
				loadingChangeValue: true
			};
		}

		case DECREMENT_VALUE_SUCCESS: {
			state.counts[0].map((objet) => {
				if (objet.id === action.payload[0].id) {
					objet.count = action.payload[0].count;
				}
			});

			return {
				...state,
				loadingChangeValue: false,
				counts: state.counts
			};
		}

		case DECREMENT_VALUE_ERROR: {
			return {
				...state,
				errorChangeValue: action.payload
			};
		}

		case ADD_COUNTER_REQUEST: {
			return {
				...state,
				loadingAddCounter: true
			};
		}

		case ADD_COUNTER_SUCCESS: {
			return {
				...state,
				loadingAddCounter: false
			};
		}

		case ADD_COUNTER_ERROR: {
			return {
				...state,
				loadingAddCounter: false,
				errorAddCounter: action.payload
			};
		}

		case DELETE_COUNTER_REQUEST: {
			return {
				...state
			};
		}

		case DELETE_COUNTER_SUCCESS: {
			const newState = [];
			newState[0] = state.counts[0].filter((item) => item.id !== action.payload[0]);

			return {
				...state,
				counts: newState
			};
		}

		case DELETE_COUNTER_ERROR: {
			return {
				...state,
				errorDeleteCounter: action.payload
			};
		}

		default:
			return state;
	}
};

export default count_reducer;
