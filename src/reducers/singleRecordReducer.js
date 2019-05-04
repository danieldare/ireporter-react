import {
  FETCH_SINGLE_RECORD_SUCCESS,
  FETCH_SINGLE_RECORD_REQUEST,
  FETCH_SINGLE_RECORD_FAILURE
} from '../actions/actionTypes/types';

const initialState = {
  incident: '',
  isFetching: false,
  errors: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_RECORD_SUCCESS:
      return {
        ...state,
        incident: { ...action.payload },
        isFetching: false
      };
    case FETCH_SINGLE_RECORD_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_SINGLE_RECORD_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    default:
      return state;
  }
};
