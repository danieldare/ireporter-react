import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import postReducer from './postReducer';
import viewRecords from './viewIncidentReducer';
import singleRecordReducer from './singleRecordReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  post: postReducer,
  profile: profileReducer,
  Records: viewRecords,
  singleRecord: singleRecordReducer
});
