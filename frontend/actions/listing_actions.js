export const ListingsConstants = {
  REQUEST_LISTINGS: "REQUEST_LISTINGS",
  REQUEST_LISTING: "REQUEST_LISTING",
  RECEIVE_LISTINGS: "RECEIVE_LISTINGS",
  RECEIVE_LISTING: "RECEIVE_LISTING",
  UPDATE_LISTING: "UPDATE_LISTING",
  DELETE_LISTING: "DELETE_LISTING",
  CREATE_LISTING: "CREATE_LISTING",
  RECEIVE_ERRORS: "RECEIVE_ERRORS",
  CLEAR_ERRORS: "CLEAR_ERRORS"
};

export const requestListing = listingId => ({
  type: ListingsConstants.REQUEST_LISTING,
  listingId
});

export const requestListings = () => ({
  type: ListingsConstants.REQUEST_LISTINGS
});

export const receiveListing = listing => ({
  type: ListingsConstants.RECEIVE_LISTING,
  listing
});

export const receiveListings = listings => ({
  type: ListingsConstants.RECEIVE_LISTINGS,
  listings
});

export const updateListing = listing => ({
  type: ListingsConstants.UPDATE_LISTING,
  listing
});

export const deleteListing = listingId => ({
  type: ListingsConstants.DELETE_LISTING,
  listingId
});

export const createListing = listing => ({
  type: ListingsConstants.CREATE_LISTING,
  listing
});

export const receiveErrors = errors => ({
  type: ListingsConstants.RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: ListingsConstants.CLEAR_ERRORS
});
