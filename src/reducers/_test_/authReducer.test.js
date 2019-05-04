import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SET_CURRENT_USER
} from '../../actions/actionTypes/types';
import authReducer from '../authReducer';

const authState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: ''
};

describe('Auth reducer: ', () => {
  it('should have the correct default state', () => {
    expect(
      authReducer(undefined, {
        type: 'non-existent type'
      })
    ).toEqual({
      token: localStorage.getItem('token'),
      isAuthenticated: null,
      isLoading: false,
      user: ''
    });
  });

  it('should update the reducer state when creating', () => {
    const action = {
      type: USER_LOADING
    };
    const result = authReducer(authState, action);
    const expected = {
      ...authState,
      isLoading: true
    };
    expect(result).toEqual(expected);
  });

  it('should update the reducer state when successful', () => {
    const action = {
      type: SET_CURRENT_USER,
      type: USER_LOADED
    };
    const result = authReducer(authState, action);
    const expected = {
      ...authState,
      isAuthenticated: true,
      isLoading: false,
      user: action.payload
    };
    expect(result).toEqual(expected);
  });

  it('should update the reducer state when unsuccessful', () => {
    const action = {
      type: LOGIN_FAIL,
      type: AUTH_ERROR,
      type: REGISTER_FAIL,
      type: LOGOUT_SUCCESS
    };
    const result = authReducer(authState, action);
    const expected = {
      ...authState,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      user: null
    };
    expect(result).toEqual(expected);
  });
});
