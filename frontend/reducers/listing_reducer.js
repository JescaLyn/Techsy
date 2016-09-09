import { ListingConstants } from '../actions/listing_actions';
import { merge } from 'lodash';

const defaultState = Object.freeze({
  currentListing: {},
  errors: []
});

const ListingReducer = (state = defaultState, action) => {
  let newState = merge({}, defaultState);

  switch (action.type) {
    case ListingConstants.RECEIVE_LISTING:
      newState.currentListing = action.listing;
      return newState;
    case ListingConstants.RECEIVE_LISTING_ERRORS:
      newState.errors = action.errors;
      return newState;
    case ListingConstants.CLEAR_LISTING_ERRORS:
      newState = merge({}, state);
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default ListingReducer;
