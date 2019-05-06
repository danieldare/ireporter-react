import Axios from 'axios';
import * as actionTypes from '../../actionTypes/types';
import * as actions from '../postActions';
import { mockStore } from '../../../../test/setupTests.js';

jest.mock('axios');

describe('actions', () => {
  it('should create an action post request', () => {
    const store = mockStore();
    const expectedAction = {
      type: actionTypes.CREATING
    };
    expect(store.dispatch({ type: actionTypes.CREATING })).toEqual(
      expectedAction
    );
  });

  it('should create an action for a post success', () => {
    const store = mockStore();
    const expectedAction = {
      type: actionTypes.CREATE_REDFLAG
    };
    expect(store.dispatch({ type: actionTypes.CREATE_REDFLAG })).toEqual(
      expectedAction
    );
  });

  it('should create an action for a post failure', () => {
    const store = mockStore();
    const expectedAction = {
      type: actionTypes.CREATE_FAILED
    };
    expect(store.dispatch({ type: actionTypes.CREATE_FAILED })).toEqual(
      expectedAction
    );
  });
  it('should create an action for a Network error', () => {
    const store = mockStore();
    const expectedAction = {
      type: actionTypes.NETWORK_ERROR
    };
    expect(store.dispatch({ type: actionTypes.NETWORK_ERROR })).toEqual(
      expectedAction
    );
  });
});

describe('Post Actions', () => {
  it('should handle Post success', () => {
    const store = mockStore();
    const expectedActions = [
      { type: actionTypes.CREATING },
      {
        type: actionTypes.CREATE_REDFLAG,
        payload: { data: [{ message: 'success' }] }
      }
    ];
    Axios.post.mockResolvedValue({ data: { data: [{ message: 'success' }] } });
    return store.dispatch(actions.createRecord()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should handle Post failure', () => {
    const store = mockStore();
    const expectedActions = [
      { type: actionTypes.CREATING },
      {
        type: actionTypes.CREATE_FAILED,
        payload: 'errors'
      }
    ];
    Axios.post.mockRejectedValue({ response: { data: { errors: 'errors' } } });
    return store.dispatch(actions.createRecord()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should handle Post failure from network error', () => {
    const store = mockStore();
    const expectedActions = [
      { type: actionTypes.CREATING },
      {
        type: actionTypes.NETWORK_ERROR
      }
    ];
    Axios.post.mockRejectedValue({ message: 'Network Error' });
    return store.dispatch(actions.createRecord()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
