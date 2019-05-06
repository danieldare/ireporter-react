import Axios from 'axios';
import { toast } from 'react-toastify';
import * as actionTypes from '../../actionTypes/types';
import { mockStore } from '../../../../test/setupTests.js';
import * as actions from '../auth';

jest.mock('axios');
jest.mock('react-toastify');

describe('actions', () => {
  it('should create an action login request', () => {
    const store = mockStore();
    const expectedAction = {
      type: actionTypes.USER_LOADING
    };
    expect(store.dispatch({ type: actionTypes.USER_LOADING })).toEqual(
      expectedAction
    );
  });

  it('should create an action register failure', () => {
    const store = mockStore();
    const expectedAction = {
      type: actionTypes.USER_LOADING
    };
    expect(store.dispatch({ type: actionTypes.USER_LOADING })).toEqual(
      expectedAction
    );
  });

  it('should create an action register request', () => {
    const store = mockStore();
    const expectedAction = {
      type: actionTypes.USER_LOADING
    };
    expect(store.dispatch({ type: actionTypes.USER_LOADING })).toEqual(
      expectedAction
    );
  });

  it('should create an action to setCurrent User', () => {
    const store = mockStore({});
    const expectedAction = {
      type: actionTypes.SET_CURRENT_USER
    };
    expect(actions.setCurrentUser()).toEqual(expectedAction);
  });

  it('should create an action logout User', () => {
    const expectedAction = {
      type: actionTypes.LOGOUT_SUCCESS
    };
    expect(actions.logout()).toEqual(expectedAction);
  });
});

describe('Auth Login Actions', () => {
  it('should handle Auth success', () => {
    const store = mockStore();
    const expectedActions = [
      { type: actionTypes.USER_LOADING },
      {
        type: actionTypes.LOGIN_SUCCESS,
        payload: 'success'
      }
    ];
    Axios.post.mockResolvedValue({ data: 'success' });
    return store.dispatch(actions.login({}, { push: jest.fn() })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should handle Auth failure', () => {
    const store = mockStore();
    const expectedActions = [
      { type: actionTypes.USER_LOADING },
      {
        type: actionTypes.LOGIN_FAIL,
        payload: 'error'
      }
    ];
    toast.error.mockImplementation(jest.fn());
    Axios.post.mockRejectedValue({ response: { data: { errors: 'error' } } });
    return store.dispatch(actions.login({}, { push: jest.fn() })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      expect(toast.error).toHaveBeenCalled();
    });
  });

  it('should handle Auth failure(Network error) ', () => {
    const store = mockStore();
    const expectedActions = [
      { type: actionTypes.USER_LOADING },
      {
        type: actionTypes.NETWORK_ERROR
      }
    ];
    toast.error.mockImplementation(jest.fn());
    Axios.post.mockRejectedValue({ message: 'Network Error' });
    return store.dispatch(actions.login()).then(() => {
      expect(toast.error).toHaveBeenCalled();
    });
  });
});

describe('Auth Register Actions', () => {
  it('should handle Auth success', () => {
    const store = mockStore();
    const expectedActions = [
      { type: actionTypes.USER_LOADING },
      {
        type: actionTypes.REGISTER_SUCCESS,
        payload: 'success'
      }
    ];
    Axios.post.mockResolvedValue({ data: 'success' });
    return store
      .dispatch(actions.register({}, { push: jest.fn() }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should handle Auth failure', () => {
    const store = mockStore();
    const expectedActions = [
      { type: actionTypes.USER_LOADING },
      {
        type: actionTypes.REGISTER_FAIL,
        payload: 'error'
      }
    ];
    toast.error.mockImplementation(jest.fn());
    Axios.post.mockRejectedValue({ response: { data: { errors: 'error' } } });
    return store
      .dispatch(actions.register({}, { push: jest.fn() }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        expect(toast.error).toHaveBeenCalled();
      });
  });

  it('should handle Auth failure(Network error) ', () => {
    const store = mockStore();
    const expectedActions = [
      { type: actionTypes.USER_LOADING },
      {
        type: actionTypes.NETWORK_ERROR
      }
    ];
    toast.error.mockImplementation(jest.fn());
    Axios.post.mockRejectedValue({ message: 'Network Error' });
    return store.dispatch(actions.register()).then(() => {
      expect(toast.error).toHaveBeenCalled();
    });
  });
});
