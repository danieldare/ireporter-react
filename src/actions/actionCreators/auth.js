import Axios from 'axios';
import { toast } from 'react-toastify';
import {
  USER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SET_CURRENT_USER,
  LOGIN_FAIL
} from '../actionTypes/types';

export const tokenConfig = () => {
  // get token from localStorage
  const token = localStorage.getItem('token');

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

export const userLoading = () => ({
  type: USER_LOADING
});

export const userSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload
});

export const userFailure = payload => ({
  type: LOGIN_FAIL,
  payload
});

export const registerSuccess = payload => ({
  type: REGISTER_SUCCESS,
  payload
});

export const registerFailure = payload => ({
  type: REGISTER_FAIL,
  payload
});

export const register = (userData, history) => dispatch => {
  dispatch(userLoading());
  return Axios.post(`${process.env.API_BASE_URL}/auth/signup`, { ...userData })
    .then(res => {
      toast.success('Registration successful');
      dispatch(registerSuccess(res.data));
      history.push('/login');
    })
    .catch(err => {
      if (err.message === 'Network Error') {
        return toast.error('Check Internet connection!');
      }
      dispatch({ type: REGISTER_FAIL, payload: err.response.data.errors });
      return (
        typeof err.response.data.errors === 'string' &&
        toast.error(err.response.data.errors)
      );
    });
};

export const login = (userData, history) => dispatch => {
  dispatch(userLoading());
  return Axios.post(`${process.env.API_BASE_URL}/auth/login`, { ...userData })
    .then(res => {
      dispatch(userSuccess(res.data));
      toast.success('Login successful');
      history.push('/dashboard');
    })
    .catch(err => {
      if (err.message === 'Network Error') {
        return toast.error('Check Internet connection!');
      }
      dispatch(userFailure(err.response.data.errors));
      return (
        typeof err.response.data.errors === 'string' &&
        toast.error(err.response.data.errors)
      );
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
