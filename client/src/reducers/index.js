import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import registerReducer from './registerReducer';

export default combineReducers({
  alertReducer,
  registerReducer,
});
