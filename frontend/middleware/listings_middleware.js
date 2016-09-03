import { ListingsConstants, receiveListings, receiveListing, receiveErrors }
  from '../actions/listing_actions';
import * as API from "../util/listing_api_util";

const ListingsMiddleware = ({ getState, dispatch }) => next => action => {
  let success = listing => dispatch(receiveListing(listing));

  const error = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };

  switch (action.type) {
    case ListingsConstants.REQUEST_LISTING:
      API.fetchListing(action.listingId, success, error);
      return next(action);
    case ListingsConstants.REQUEST_LISTINGS:
      success = listings => dispatch(receiveListings(listings));
      API.fetchListings(success, error);
      return next(action);
    case ListingsConstants.UPDATE_LISTING:
      API.updateListing(action.listing, success, error);
      return next(action);
    case ListingsConstants.DELETE_LISTING:
      success = () => console.log("Delete successful");
      API.deleteListing(action.listingId, success, error);
      return next(action);
    case ListingsConstants.CREATE_LISTING:
      API.createListing(action.listing, success, error);
      return next(action);
    default:
      next(action);
  }
};

export default ListingsMiddleware;
