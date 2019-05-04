import Axios from 'axios';
import { toast } from 'react-toastify';
import { returnErrors } from './error';
import {
  CREATE_REDFLAG,
  CREATE_FAILED,
  CREATING,
  NETWORK_ERROR
} from '../actionTypes/types';
import { tokenConfig } from './auth';

export const createRecord = (incidentData, type) => (dispatch, getState) => {
  dispatch({ type: CREATING });
  Axios.post(
    `${process.env.API_BASE_URL}/${type}`,
    incidentData,
    tokenConfig(getState)
  )
    .then(res => {
      dispatch({
        type: CREATE_REDFLAG,
        payload: res.data
      });
      toast.success(res.data.data[0].message);
    })
    .catch(err => {
      if (err.message === 'Network Error') {
        dispatch({ type: NETWORK_ERROR });
        return toast.error('Check Internet connection!');
      }
      if (err.message.includes('timeout')) {
        dispatch({ type: NETWORK_ERROR });
        return toast.error('Timeout!');
      }
      dispatch(
        returnErrors(err.response.data, err.response.status, 'POST_FAILED')
      );
      dispatch({ type: CREATE_FAILED });
      return toast.error(err.response.data.errors || err.response);
    });
};

export const hello = 'hello';
