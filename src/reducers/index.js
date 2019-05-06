import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postReducer from './postReducer';
import viewRecords from './viewIncidentReducer';
import singleRecordReducer from './singleRecordReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  auth: authReducer,
  post: postReducer,
  profile: profileReducer,
  Records: viewRecords,
  singleRecord: singleRecordReducer
});
