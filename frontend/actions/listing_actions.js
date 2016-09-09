export const ListingConstants = {
  REQUEST_LISTINGS: "REQUEST_LISTINGS",
  REQUEST_LISTING: "REQUEST_LISTING",
  RECEIVE_LISTINGS: "RECEIVE_LISTINGS",
  RECEIVE_LISTING: "RECEIVE_LISTING",
  UPDATE_LISTING: "UPDATE_LISTING",
  DELETE_LISTING: "DELETE_LISTING",
  CREATE_LISTING: "CREATE_LISTING",
  RECEIVE_LISTING_ERRORS: "RECEIVE_LISTING_ERRORS",
  CLEAR_LISTING_ERRORS: "CLEAR_LISTING_ERRORS",
  CLEAR_LISTINGS: "CLEAR_LISTINGS"
};

export const requestListing = listingId => ({
  type: ListingConstants.REQUEST_LISTING,
  listingId
});

export const requestListings = (filters) => ({
  type: ListingConstants.REQUEST_LISTINGS,
  filters
});

export const receiveListing = listing => ({
  type: ListingConstants.RECEIVE_LISTING,
  listing
});

export const receiveListings = listings => ({
  type: ListingConstants.RECEIVE_LISTINGS,
  listings
});

export const updateListing = listing => ({
  type: ListingConstants.UPDATE_LISTING,
  listing
});

export const deleteListing = listingId => ({
  type: ListingConstants.DELETE_LISTING,
  listingId
});

export const createListing = listing => ({
  type: ListingConstants.CREATE_LISTING,
  listing
});

export const receiveListingErrors = errors => ({
  type: ListingConstants.RECEIVE_LISTING_ERRORS,
  errors
});

export const clearListingErrors = () => ({
  type: ListingConstants.CLEAR_LISTING_ERRORS
});

export const clearListings = () => ({
  type: ListingConstants.CLEAR_LISTINGS
});
