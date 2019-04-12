import {
  CREATE_REDFLAG,
  CREATING,
  CREATE_FAILED
  // NETWORK_ERROR
} from '../actions/types';

const initialState = {
  incidents: [],
  incident: {},
  isLoading: false,
  isCreating: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REDFLAG:
      return {
        ...state,
        incident: [action.payload, ...state.incidents],
        isCreating: false
      };
    case CREATING:
      return {
        ...state,
        isCreating: true
      };
    case CREATE_FAILED:
      return {
        ...state,
        isCreating: false
      };

    default:
      return state;
  }
};
