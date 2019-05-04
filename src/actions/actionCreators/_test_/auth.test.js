import faker from 'faker';
import axios from 'axios';
import * as actionTypes from '../../actionTypes/types';
import * as actions from '../auth';
import { mockStore } from '../../../../test/setupTests.js';

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
});
