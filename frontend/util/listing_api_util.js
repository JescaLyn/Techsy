export const fetchListings = (success, error, filters) => {
  $.ajax({
    method: "get",
    url: "/api/listings",
    data: filters,
    success,
    error
  });
};

export const fetchListing = (listingId, success, error) => {
  $.ajax({
    method: "get",
    url: `/api/listings/${listingId}`,
    success,
    error
  });
};

export const createListing = (listing, success, error) => {
  $.ajax({
    method: "post",
    url: "/api/listings",
    data: listing,
    success,
    error
  });
};

export const updateListing = (listing, success, error) => {
  $.ajax({
    method: "patch",
    url: `/api/listing/${listing.id}`,
    data: listing,
    success,
    error
  });
};

export const destroyListing = (listingId, success, error) => {
  $.ajax({
    method: "delete",
    url: `/api/listings/${listingId}`,
    success,
    error
  });
};
