import faker from 'faker';
import axios from 'axios';
import * as actionTypes from '../../actionTypes/types';
import * as actions from '../profileAction';
import { mockStore } from '../../../../test/setupTests.js';

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
