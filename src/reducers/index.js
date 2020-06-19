import { combineReducers } from 'redux';
import googleAuthReducer from './googleAuthReducer';
import { reducer as formReducer } from 'redux-form';
import streamReducer from './streamReducer';

export default combineReducers({
  auth: googleAuthReducer,
  form: formReducer,
  streams: streamReducer,
});
