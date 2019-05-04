import faker from 'faker';
import axios from 'axios';
import * as actionTypes from '../../actionTypes/types';
import * as actions from '../postActions';
import { mockStore } from '../../../../test/setupTests.js';

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
