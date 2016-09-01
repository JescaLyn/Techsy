import { ListingsConstants } from '../actions/listing_actions';
import { merge } from 'lodash';

const defaultState = Object.freeze({
  currentListing: {},
  errors: []
});

const ListingReducer = (state = defaultState, action) => {
  const newState = merge({}, defaultState);

  switch (action.type) {
    case ListingsConstants.RECEIVE_LISTING:
      newState.currentListing = action.listing;
      return newState;
    case ListingsConstants.RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;
    case ListingsConstants.CLEAR_ERRORS:
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default ListingReducer;
