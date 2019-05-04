import {
  FETCH_RECORD_SUCCESS,
  FETCH_RECORD_REQUEST,
  FETCH_RECORD_FAILURE
} from '../actions/actionTypes/types';

const initialState = {
  incidents: [],
  isFetching: false,
  errors: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECORD_SUCCESS:
      return {
        ...state,
        incidents: action.payload,
        isFetching: false
      };
    case FETCH_RECORD_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_RECORD_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    default:
      return state;
  }
};
