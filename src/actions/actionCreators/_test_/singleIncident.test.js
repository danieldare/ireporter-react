import faker from 'faker';
import Axios from 'axios';
import { toast } from 'react-toastify';
import * as actionTypes from '../../actionTypes/types';
import * as actions from '../singleRecord';
import { mockStore } from '../../../../test/setupTests.js';

jest.mock('axios');
jest.mock('react-toastify');

describe('actions', () => {
  it('should create an action for singleIncident request', () => {
    const store = mockStore({});
    const expectedAction = {
      type: actionTypes.FETCH_SINGLE_RECORD_REQUEST
    };
    expect(actions.fetchRecordRequest()).toEqual(expectedAction);
  });

  it('should create an action singleIncident success', () => {
    const store = mockStore({});
    const expectedAction = {
      type: actionTypes.FETCH_SINGLE_RECORD_SUCCESS,
      payload: 'success'
    };
    expect(actions.fetchRecordSuccess('success')).toEqual(expectedAction);
  });

  it('should create an action viewIncident failure', () => {
    const store = mockStore({});
    const expectedAction = {
      type: actionTypes.FETCH_SINGLE_RECORD_FAILURE,
      payload: 'failure'
    };
    expect(actions.fetchRecordFailure('failure')).toEqual(expectedAction);
  });
});

describe('View Incident Actions', () => {
  it('should handle singleIncident success', () => {
    const store = mockStore();
    const expectedActions = [
      { type: actionTypes.FETCH_SINGLE_RECORD_REQUEST },
      {
        type: actionTypes.FETCH_SINGLE_RECORD_SUCCESS,
        payload: 'success'
      }
    ];
    Axios.get.mockResolvedValue({ data: { data: ['success'] } });
    return store.dispatch(actions.fetchOneRecord()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should handle singleIncident failure', () => {
    const store = mockStore();
    const expectedActions = [
      { type: actionTypes.FETCH_SINGLE_RECORD_REQUEST },
      {
        type: actionTypes.FETCH_SINGLE_RECORD_FAILURE,
        payload: 'failure'
      }
    ];
    Axios.get.mockRejectedValue({ response: 'failure' });
    return store.dispatch(actions.fetchOneRecord()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
