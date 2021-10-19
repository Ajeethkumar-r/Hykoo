import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import auth from './auth';

export default combineReducers({
  alertReducer,
  auth,
});
