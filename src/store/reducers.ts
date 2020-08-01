import { combineReducers } from 'redux';
import user from './user/reducer';
import circle from './circle/reducer';
import commerce from './commerce/reducer';
import auth from './auth/reducer';
import search from './search/reducer';

const reducers = combineReducers({
  user,
  circle,
  commerce,
  auth,
  search
});

export default reducers;
