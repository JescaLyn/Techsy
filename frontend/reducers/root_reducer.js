import session from './session_reducer';
import modals from './modals_reducer';
import listings from './listings_reducer';
import listing from './listing_reducer';
import shop from './shop_reducer';
import cart from './cart_reducer';
import search from './search_reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  session,
  modals,
  listings,
  listing,
  shop,
  cart,
  search
});

export default RootReducer;
