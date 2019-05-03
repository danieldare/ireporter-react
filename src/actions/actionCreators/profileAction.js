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
import { tokenConfig } from "./auth";

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

export const getIncidents = () => (dispatch, getState) => {
  console.log(dispatch);
  dispatch(getIncidentStart());
  Axios.get(
    'https://ireporter-full.herokuapp.com/api/v1/incident',
    tokenConfig(getState)
  )
    .then(res => {
      console.log(res.data);
      return dispatch(getIncidentSuccess(res.data));
    })
    .catch(err => {
      console.log(err);
      dispatch(getIncidentFailure(err.response));
    });
};

export const deleteIncident = (id, type) => (dispatch, getState) => {
  dispatch({ type: INCIDENT_DELETING });
  Axios.delete(
    `https://ireporter-full.herokuapp.com/api/v1/${type}/${id}`,
    tokenConfig(getState)
  )
    .then(res => {
      console.log(res.data.data[0].message);
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
