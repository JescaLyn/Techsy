import { ListingConstants } from '../actions/listing_actions';
import { merge } from 'lodash';

const ListingsReducer = (state = [], action) => {
  switch (action.type) {
    case ListingConstants.RECEIVE_LISTINGS:
      return action.listings;
    case ListingConstants.CLEAR_LISTINGS:
      return [];
    default:
      return state;
  }
};

export default ListingsReducer;
