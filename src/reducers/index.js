import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import postReducer from './postReducer';
import viewRecords from './viewIncidentReducer';
import singleRecordReducer from './singleRecordReducer';

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  post: postReducer,
  Records: viewRecords,
  singleRecord: singleRecordReducer
});
