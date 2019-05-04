import {
  FETCH_SINGLE_RECORD_SUCCESS,
  FETCH_SINGLE_RECORD_REQUEST,
  FETCH_SINGLE_RECORD_FAILURE
} from '../../actions/actionTypes/types';
import singleRecordReducer from '../singleRecordReducer';

const singleRecordState = {
  incident: '',
  isFetching: false,
  errors: null
};

describe('Reset password reducer: ', () => {
  it('should have the correct default state', () => {
    expect(
      singleRecordReducer(undefined, {
        type: 'non-existent type'
      })
    ).toEqual({
      incident: '',
      isFetching: false,
      errors: null
    });
  });

  it('should update the reducer state when loading', () => {
    const action = {
      type: FETCH_SINGLE_RECORD_REQUEST
    };
    const result = singleRecordReducer(singleRecordState, action);
    const expected = {
      ...singleRecordState,
      isFetching: true
    };
    expect(result).toEqual(expected);
  });

  it('should update the reducer state when successful', () => {
    const action = {
      type: FETCH_SINGLE_RECORD_SUCCESS,
      incident: []
    };
    const result = singleRecordReducer(singleRecordState, action);
    const expected = {
      ...singleRecordState,
      incident: { ...action.payload },
      isFetching: false
    };
    expect(result).toEqual(expected);
  });

  it('should update the reducer state when unsuccessful', () => {
    const action = {
      type: FETCH_SINGLE_RECORD_FAILURE
    };
    const result = singleRecordReducer(singleRecordState, action);
    const expected = {
      ...singleRecordState,
      isFetching: false,
      error: action.payload
    };
    expect(result).toEqual(expected);
  });
});
