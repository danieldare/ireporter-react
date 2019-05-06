import Axios from 'axios';
import { toast } from 'react-toastify';
import {
  CREATE_REDFLAG,
  CREATE_FAILED,
  CREATING,
  NETWORK_ERROR
} from '../actionTypes/types';
import { tokenConfig } from './auth';

export const createRecord = (incidentData, type) => dispatch => {
  dispatch({ type: CREATING });
  return Axios.post(
    `${process.env.API_BASE_URL}/${type}`,
    incidentData,
    tokenConfig()
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

      dispatch({ type: CREATE_FAILED, payload: err.response.data.errors });
      return toast.error(err.response.data.errors || err.response);
    });
};

export const hello = 'hello';
