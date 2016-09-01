import session from './session_reducer';
import modals from './modals_reducer';
import listings from './listings_reducer';
import listing from './listing_reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  session,
  modals,
  listings,
  listing
});

export default RootReducer;
