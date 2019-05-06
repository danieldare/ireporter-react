import {
  CREATE_REDFLAG,
  CREATING,
  CREATE_FAILED
} from '../actions/actionTypes/types';

const initialState = {
  incidents: [],
  incident: {},
  isLoading: false,
  isCreating: false,
  success: false,
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REDFLAG:
      return {
        ...state,
        incident: [action.payload, ...state.incidents],
        isCreating: false,
        success: true,
        error: ''
      };
    case CREATING:
      return {
        ...state,
        isCreating: true,
        success: false
      };
    case CREATE_FAILED:
      return {
        ...state,
        isCreating: false,
        success: false,
        error: action.payload
      };

    default:
      return state;
  }
};
