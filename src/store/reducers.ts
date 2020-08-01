import { combineReducers } from 'redux';
import user from './user/reducer';
import circle from './circle/reducer';
import commerce from './commerce/reducer';
import auth from './auth/reducer';

const reducers = combineReducers({
  user,
  circle,
  commerce,
  auth
});

export default reducers;
