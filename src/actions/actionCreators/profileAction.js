import Axios from 'axios';
import { toast } from 'react-toastify';
import {
  INCIDENTS_LOADING,
  GET_INCIDENTS_SUCCESS,
  GET_INCIDENTS_ERROR,
  INCIDENT_DELETING,
  DELETE_INCIDENT,
  DELETE_ERRORS
} from '../actionTypes/types';
import { tokenConfig } from './auth';

export const getIncidentStart = () => ({
  type: INCIDENTS_LOADING
});

export const getIncidentSuccess = payload => ({
  type: GET_INCIDENTS_SUCCESS,
  payload
});

export const getIncidentFailure = payload => ({
  type: GET_INCIDENTS_ERROR,
  payload
});

export const getIncidents = () => dispatch => {
  dispatch(getIncidentStart());
  return Axios.get(`${process.env.API_BASE_URL}/incident`, tokenConfig())
    .then(res => {
      dispatch(getIncidentSuccess(res.data.data));
    })
    .catch(err => {
      dispatch(getIncidentFailure(err.response));
    });
};

export const deleteIncident = (id, type) => dispatch => {
  dispatch({ type: INCIDENT_DELETING });
  return Axios.delete(
    `${process.env.API_BASE_URL}/${type}/${id}`,
    tokenConfig()
  )
    .then(res => {
      dispatch({ type: DELETE_INCIDENT, payload: id });
      return toast.error(res.data.data[0].message);
    })
    .catch(err => {
      dispatch({
        type: DELETE_ERRORS,
        payload: err.response.data
      });
    });
};

export const dfd = 'jdhdh';
