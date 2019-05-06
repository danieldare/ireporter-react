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

export const fetchIncident = url => dispatch => {
  dispatch(fetchIncidentRequest());
  return axios
    .get(`${process.env.API_BASE_URL}/${url}`, tokenConfig())
    .then(res => {
      return dispatch(fetchIncidentSuccess(res.data.data));
    })
    .catch(err => dispatch(fetchIncidentFailure(err.response)));
};
