import { ListingConstants, receiveListings, receiveListing,
  receiveListingErrors, clearListings } from '../actions/listing_actions';
import * as API from "../util/listing_api_util";
import { hashHistory } from 'react-router';

const ListingsMiddleware = ({ getState, dispatch }) => next => action => {
  let success = listing => dispatch(receiveListing(listing));
  let allListingsSuccess = listings => dispatch(receiveListings(listings));
  let createListingSuccess = listing => {
    dispatch(receiveListing(listing));
    hashHistory.push(`/listings/${listing.id}`);
  };

  const error = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveListingErrors(errors));
  };

  switch (action.type) {
    case ListingConstants.REQUEST_LISTING:
      API.fetchListing(action.listingId, success, error);
      return next(action);
    case ListingConstants.REQUEST_LISTINGS:
      dispatch(clearListings());
      API.fetchListings(allListingsSuccess, error, action.filters);
      return next(action);
    case ListingConstants.UPDATE_LISTING:
      API.updateListing(action.listing, success, error);
      return next(action);
    case ListingConstants.DELETE_LISTING:
      success = () => console.log("Delete successful");
      API.deleteListing(action.listingId, success, error);
      return next(action);
    case ListingConstants.CREATE_LISTING:
      API.createListing(action.listing, createListingSuccess, error);
      return next(action);
    default:
      next(action);
  }
};

export default ListingsMiddleware;
