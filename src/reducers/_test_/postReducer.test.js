import {
  CREATE_REDFLAG,
  CREATING,
  CREATE_FAILED
} from '../../actions/actionTypes/types';
import postReducer from '../postReducer';

const postState = {
  incidents: [],
  incident: {},
  isLoading: false,
  isCreating: false,
  success: false
};

describe('Reset password reducer: ', () => {
  it('should have the correct default state', () => {
    expect(
      postReducer(undefined, {
        type: 'non-existent type'
      })
    ).toEqual({
      incidents: [],
      incident: {},
      isLoading: false,
      isCreating: false,
      success: false
    });
  });

  it('should update the reducer state when successful', () => {
    const action = {
      type: CREATING
    };
    const result = postReducer(postState, action);
    const expected = {
      ...postState,
      isCreating: true,
      success: false
    };
    expect(result).toEqual(expected);
  });

  it('should update the reducer state when successful', () => {
    const action = {
      type: CREATE_REDFLAG,
      incidents: []
    };
    const result = postReducer(postState, action);
    const expected = {
      ...postState,
      incident: [action.payload, ...postState.incidents],
      isCreating: false,
      success: true
    };
    expect(result).toEqual(expected);
  });

  it('should update the reducer state when unsuccessful', () => {
    const action = {
      type: CREATE_FAILED
    };
    const result = postReducer(postState, action);
    const expected = {
      ...postState,
      isCreating: false,
      success: false
    };
    expect(result).toEqual(expected);
  });
});
