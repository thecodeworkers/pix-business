import { combineReducers } from 'redux';
import user from './user/reducer';
import circle from './circle/reducer';
import commerce from './commerce/reducer';
import auth from './auth/reducer';
import search from './search/reducer';
import activity from './activity/reducer';
import wallet from './wallet/reducer';
import register from './register/reducer';

const reducers = combineReducers({
  user,
  circle,
  commerce,
  auth,
  search,
  activity,
  wallet,
  register
});

export default reducers;
