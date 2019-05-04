import {
  GET_INCIDENTS_ERROR,
  INCIDENTS_LOADING,
  GET_INCIDENTS_SUCCESS,
  DELETE_INCIDENT,
  INCIDENT_DELETING
} from '../actions/actionTypes/types';

const initialState = {
  incidents: [],
  isLoading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_INCIDENTS_SUCCESS:
      return {
        ...state,
        incidents: action.payload,
        isLoading: false,
        error: null
      };
    case INCIDENTS_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case GET_INCIDENTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case DELETE_INCIDENT:
      return {
        ...state,
        isDeleting: false,
        incidents: state.incidents.filter(
          incident => incident.id !== action.payload
        )
      };
    case INCIDENT_DELETING:
      return {
        ...state,
        isDeleting: true
      };
    default:
      return state;
  }
};
