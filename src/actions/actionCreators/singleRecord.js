import axios from 'axios';
import {
  FETCH_SINGLE_RECORD_FAILURE,
  FETCH_SINGLE_RECORD_SUCCESS,
  FETCH_SINGLE_RECORD_REQUEST
} from '../actionTypes/types';
import { tokenConfig } from './auth';

export const fetchRecordRequest = () => ({
  type: FETCH_SINGLE_RECORD_REQUEST
});

export const fetchRecordSuccess = payload => ({
  type: FETCH_SINGLE_RECORD_SUCCESS,
  payload
});

export const fetchRecordFailure = payload => ({
  type: FETCH_SINGLE_RECORD_FAILURE,
  payload
});

export const fetchOneRecord = (id, url) => (dispatch, getState) => {
  dispatch(fetchRecordRequest());
  axios
    .get(
      `https://ireporter-full.herokuapp.com/api/v1/${url}/${id}`,
      tokenConfig(getState)
    )
    .then(res => {
      console.log(res.data);
      return dispatch(fetchRecordSuccess(res.data.data[0]));
    })
    .catch(err => dispatch(fetchRecordFailure(err.response)));
};
