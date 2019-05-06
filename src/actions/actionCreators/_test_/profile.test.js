import faker from 'faker';
import Axios from 'axios';
import { toast } from 'react-toastify';
import * as actionTypes from '../../actionTypes/types';
import * as actions from '../profileAction';
import { mockStore } from '../../../../test/setupTests.js';

jest.mock('axios');
jest.mock('react-toastify');

describe('actions', () => {
  it('should create an action login request', () => {
    const store = mockStore({});
    const expectedAction = {
      type: actionTypes.INCIDENTS_LOADING
    };
    expect(actions.getIncidentStart()).toEqual(expectedAction);
  });

  it('should create an action login success', () => {
    const store = mockStore({});
    const expectedAction = {
      type: actionTypes.GET_INCIDENTS_SUCCESS,
      payload: 'success'
    };
    expect(actions.getIncidentSuccess('success')).toEqual(expectedAction);
  });

  it('should create an action login success', () => {
    const store = mockStore({});
    const expectedAction = {
      type: actionTypes.GET_INCIDENTS_ERROR,
      payload: 'failure'
    };
    expect(actions.getIncidentFailure('failure')).toEqual(expectedAction);
  });
});

describe('Profile Actions getIncident', () => {
  it('should handle Profile success', () => {
    const store = mockStore();
    const expectedActions = [
      { type: actionTypes.INCIDENTS_LOADING },
      {
        type: actionTypes.GET_INCIDENTS_SUCCESS,
        payload: 'success'
      }
    ];
    Axios.get.mockResolvedValue({ data: { data: 'success' } });
    return store.dispatch(actions.getIncidents()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should handle Profile error', () => {
    const store = mockStore();
    const expectedActions = [
      { type: actionTypes.INCIDENTS_LOADING },
      {
        type: actionTypes.GET_INCIDENTS_ERROR,
        payload: 'failure'
      }
    ];
    Axios.get.mockRejectedValue({ response: 'failure' });
    return store.dispatch(actions.getIncidents()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('Profile Actions delete', () => {
  it('should handle Profile success', () => {
    const store = mockStore();
    const expectedActions = [
      { type: actionTypes.INCIDENT_DELETING },
      {
        type: actionTypes.DELETE_INCIDENT,
        payload: 3
      }
    ];
    Axios.delete.mockResolvedValue({ data: { data: [{ message: '' }] } });
    return store.dispatch(actions.deleteIncident(3)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should handle Profile error (delete)', () => {
    const store = mockStore();
    const expectedActions = [
      { type: actionTypes.INCIDENT_DELETING },
      {
        type: actionTypes.DELETE_ERRORS,
        payload: 'error'
      }
    ];
    Axios.delete.mockRejectedValue({ response: { data: 'error' } });
    return store.dispatch(actions.deleteIncident()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
