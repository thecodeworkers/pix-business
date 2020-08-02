import { combineReducers } from 'redux';
import user from './user/reducer';
import circle from './circle/reducer';
import commerce from './commerce/reducer';
import auth from './auth/reducer';
import search from './search/reducer';
import activity from './activity/reducer';
import wallet from './wallet/reducer';
import register from './register/reducer';
import bankAccount from './bankAccount/reducer';
import counterparty from './counterparty/reducer';
import multiSend from './multisend/reducer';
import finished from './finished/reducer';
import product from './product/reducer';
import intermittence from './intermittence/reducer';

const reducers = combineReducers({
  user,
  circle,
  commerce,
  auth,
  search,
  activity,
  wallet,
  register,
  bankAccount,
  counterparty,
  multiSend,
  finished,
  product,
  intermittence
});

export default reducers;
