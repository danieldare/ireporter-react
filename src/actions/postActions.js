import Axios from 'axios';
import { toast } from 'react-toastify';
import { returnErrors } from './errorActions';
import {
  CREATE_REDFLAG,
  CREATE_FAILED,
  CREATING,
  NETWORK_ERROR
} from './types';
import { tokenConfig } from './authActions';

export const createRecord = incidentData => (dispatch, getState) => {
  dispatch({ type: CREATING });
  Axios.post(
    `https://ireporter-full.herokuapp.com/api/v1/red-flags`,
    incidentData,
    tokenConfig(getState)
  )
    .then(res => {
      console.log(res.data);
      dispatch({
        type: CREATE_REDFLAG,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      if (err.message === 'Network Error') {
        dispatch({ type: NETWORK_ERROR });
        return toast.error('Check Internet connection!');
      }
      // if (err.response.data.error.name === 'TokenExpiredError') {

      // }
      dispatch(
        returnErrors(err.response.data, err.response.status, 'POST_FAILED')
      );
      dispatch({ type: CREATE_FAILED });
      return toast.error(err.response.data.errors || err.response);
    });
};

export const hello = 'hello';
