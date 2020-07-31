import { combineReducers } from 'redux';
import user from './user/reducer';
import circle from './circle/reducer';

const reducers = combineReducers({
  user,
  circle
});

export default reducers;
