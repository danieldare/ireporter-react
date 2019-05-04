import {
  GET_INCIDENTS_ERROR,
  INCIDENTS_LOADING,
  GET_INCIDENTS_SUCCESS,
  DELETE_INCIDENT,
  INCIDENT_DELETING
} from '../../actions/actionTypes/types';
import profileReducer from '../profileReducer';

const profileState = {
  incidents: [],
  isLoading: false,
  error: null
};

describe('Reset password reducer: ', () => {
  it('should have the correct default state', () => {
    expect(
      profileReducer(undefined, {
        type: 'non-existent type'
      })
    ).toEqual({
      incidents: [],
      isLoading: false,
      error: null
    });
  });

  it('should update the reducer state when loading', () => {
    const action = {
      type: INCIDENTS_LOADING
    };
    const result = profileReducer(profileState, action);
    const expected = {
      ...profileState,
      isLoading: true,
      error: null
    };
    expect(result).toEqual(expected);
  });

  it('should update the reducer state when deleting', () => {
    const action = {
      type: INCIDENT_DELETING
    };
    const result = profileReducer(profileState, action);
    const expected = {
      ...profileState,
      isDeleting: true
    };
    expect(result).toEqual(expected);
  });

  it('should update the reducer state when successful', () => {
    const action = {
      type: GET_INCIDENTS_SUCCESS,
      incidents: []
    };
    const result = profileReducer(profileState, action);
    const expected = {
      ...profileState,
      incidents: action.payload,
      isLoading: false,
      error: null
    };
    expect(result).toEqual(expected);
  });

  it('should update the reducer state when successful', () => {
    const action = {
      type: DELETE_INCIDENT
    };
    const result = profileReducer(profileState, action);
    const expected = {
      ...profileState,
      isDeleting: false,
      incidents: profileState.incidents.filter(
        incident => incident.id !== action.payload
      )
    };
    expect(result).toEqual(expected);
  });

  it('should update the reducer state when unsuccessful', () => {
    const action = {
      type: GET_INCIDENTS_ERROR
    };
    const result = profileReducer(profileState, action);
    const expected = {
      ...profileState,
      isLoading: false,
      error: action.payload
    };
    expect(result).toEqual(expected);
  });
});
