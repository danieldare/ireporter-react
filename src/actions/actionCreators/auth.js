import Axios from 'axios';
import { toast } from 'react-toastify';
import { returnErrors } from './error';
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SET_CURRENT_USER
} from '../actionTypes/types';

export const tokenConfig = getState => {
  // get token from localStorage
  const { token } = getState().auth;

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };

  if (token) {
    config.headers['x-access-token'] = token;
  }

  return config;
};

// Check token and load user;
export const loadUser = () => (dispatch, getState) => {
  // dispatch user loading properties
  dispatch({ type: USER_LOADING });

  Axios.get(
    'https://ireporter-full.herokuapp.com/api/v1/auth/current',
    tokenConfig(getState)
  )
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      if (err.message === 'Network Error') {
        return toast.error('Check Internet connection!');
      }
      dispatch(returnErrors(err, err.response.status));
      dispatch({ type: AUTH_ERROR });
      return false;
    });
};

export const register = (userData, history) => dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const userInfo = JSON.stringify({ ...userData });
  dispatch({ type: USER_LOADING });
  Axios.post(
    'https://ireporter-full.herokuapp.com/api/v1/auth/signup',
    userInfo,
    config
  )
    .then(res => {
      toast.success('Registration successful');
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      history.push('/login');
    })
    .catch(err => {
      if (err.message === 'Network Error') {
        return toast.error('Check Internet connection!');
      }
      dispatch(
        returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
      );
      dispatch({ type: REGISTER_FAIL });
      return toast.error(err.response.data.errors);
    });
};

export const login = (userData, history) => dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const userInfo = JSON.stringify({ ...userData });

  return Axios.post(
    'https://ireporter-full.herokuapp.com/api/v1/auth/login',
    userInfo,
    config
  )
    .then(res => {
      toast.success('Login successful');
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      history.push('/dashboard');
    })
    .catch(err => {
      if (err.message === 'Network Error') {
        return toast.error('Check Internet connection!');
      }
      dispatch(
        returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
      );
      const { errors } = err.response.data;
      dispatch({ type: REGISTER_FAIL });
      return typeof errors === 'string' ? toast.error(errors) : '';
    });
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};
