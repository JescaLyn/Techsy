import session from './session_reducer';
import modals from './modals_reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  session,
  modals
});

export default RootReducer;
