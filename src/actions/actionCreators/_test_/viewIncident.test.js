import faker from 'faker';
import Axios from 'axios';
import { toast } from 'react-toastify';
import * as actionTypes from '../../actionTypes/types';
import * as actions from '../viewIncident';
import { mockStore } from '../../../../test/setupTests.js';

jest.mock('axios');
jest.mock('react-toastify');

describe('actions', () => {
  it('should create an action for viewIncident request', () => {
    const store = mockStore({});
    const expectedAction = {
      type: actionTypes.FETCH_RECORD_REQUEST
    };
    expect(actions.fetchIncidentRequest()).toEqual(expectedAction);
  });

  it('should create an action viewIncident success', () => {
    const store = mockStore({});
    const expectedAction = {
      type: actionTypes.FETCH_RECORD_SUCCESS,
      payload: 'success'
    };
    expect(actions.fetchIncidentSuccess('success')).toEqual(expectedAction);
  });

  it('should create an action viewIncident failure', () => {
    const store = mockStore({});
    const expectedAction = {
      type: actionTypes.FETCH_RECORD_FAILURE,
      payload: 'failure'
    };
    expect(actions.fetchIncidentFailure('failure')).toEqual(expectedAction);
  });
});

describe('View Incident Actions', () => {
  it('should handle viewIncident success', () => {
    const store = mockStore();
    const expectedActions = [
      { type: actionTypes.FETCH_RECORD_REQUEST },
      {
        type: actionTypes.FETCH_RECORD_SUCCESS,
        payload: 'success'
      }
    ];
    Axios.get.mockResolvedValue({ data: { data: 'success' } });
    return store.dispatch(actions.fetchIncident()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should handle viewIncident failure', () => {
    const store = mockStore();
    const expectedActions = [
      { type: actionTypes.FETCH_RECORD_REQUEST },
      {
        type: actionTypes.FETCH_RECORD_FAILURE,
        payload: 'failure'
      }
    ];
    Axios.get.mockRejectedValue({ response: 'failure' });
    return store.dispatch(actions.fetchIncident()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
