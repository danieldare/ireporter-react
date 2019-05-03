import axios from 'axios';
import {
  FETCH_RECORD_REQUEST,
  FETCH_RECORD_SUCCESS,
  FETCH_RECORD_FAILURE
} from '../actionTypes/types';
import { tokenConfig } from './auth';

export const fetchIncidentRequest = () => ({
  type: FETCH_RECORD_REQUEST
});

export const fetchIncidentSuccess = payload => ({
  type: FETCH_RECORD_SUCCESS,
  payload
});

export const fetchIncidentFailure = payload => ({
  type: FETCH_RECORD_FAILURE,
  payload
});

export const fetchIncident = url => (dispatch, getState) => {
  dispatch(fetchIncidentRequest());
  axios
    .get(
      `https://ireporter-full.herokuapp.com/api/v1/${url}`,
      tokenConfig(getState)
    )
    .then(res => {
      return dispatch(fetchIncidentSuccess(res.data));
    })
    .catch(err => dispatch(fetchIncidentFailure(err.response)));
};
