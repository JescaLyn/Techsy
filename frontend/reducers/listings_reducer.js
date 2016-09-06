import { ListingConstants } from '../actions/listing_actions';
import { merge } from 'lodash';

const ListingsReducer = (state = [], action) => {
  let newState;

  switch (action.type) {
    case ListingConstants.RECEIVE_LISTINGS:
      return action.listings;
    default:
      return state;
  }
};

export default ListingsReducer;
