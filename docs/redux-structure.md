# Redux Structure

The application's state is organized by data type. Under each data type, there may be sub-states. Each action is listed with the sequence of events that results from its invocation, ending with the API or a reducer. Subscribed components, i.e. containers, are listed at the end.

Using this document, you should be able to trace an **action** starting with where it was invoked, through the **API**/**reducer** involved, and finally to the **components** that update as a result. Once you start implementing your Redux structure, you'll need to do the same.

## Auth Cycles

### Session API Request Actions

* `register`
  0. invoked from `Register/Login Form` `onClick (Register button)`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Register/Login Form` `onClick (Login button)`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## All Listings Cycles

### All Listings API Request Actions

* `fetchAllListings`
  0. invoked from `ListingsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/listings` is called.
  0. `receiveAllListings` is set as the success callback.

* `createListing`
  0. invoked from new listing button `onClick`
  0. `POST /api/listings` is called.
  0. `receiveListing` is set as the success callback.

* `fetchListing`
  0. invoked from `ListingDetail` `didMount`/`willReceiveProps`
  0. `GET /api/listings/:listingId` is called.
  0. `receiveSingleListing` is set as the success callback.

* `updateListing`
  0. invoked from `ListingForm` `onSubmit`
  0. `POST /api/listings` is called.
  0. `receiveSingleListing` is set as the success callback.

* `destroyListing`
  0. invoked from delete listing button `onClick`
  0. `DELETE /api/listings/:id` is called.
  0. `removeListing` is set as the success callback.

### All Listings API Response Actions

* `receiveAllListings`
  0. invoked from an API callback
  0. the `ListingReducer` updates `listings` in the application's state.

* `receiveSingleListing`
  0. invoked from an API callback
  0. the `ListingReducer` updates `listings[id]` in the application's state.

* `removeListing`
  0. invoked from an API callback
  0. the `ListingReducer` removes `listings[id]` from the application's state.

## Cart Cycles

### Cart API Request Actions
* `fetchCurrentCart`
  0. invoked from `App` in `didMount`
  0. invoked from `Sessions` `fetchCurrentUser` `Register/Login`
  0. `GET /api/cart` is called.
  0. `receiveCart` is set as the success callback.

* `addCartItem`
  0. invoked from `ListingsDetail` `addCartItem`
  0. `PATCH /api/cart` is called.
  0. `addCartItem` is set as the success callback

* `removeCartItem`
  0. invoked from `CartIndex` `removeCartItem`
  0. `PATCH /api/cart` is called.
  0. `removeCartItem` is set as the success callback

### Cart API Response Actions
* `receiveCart`
  0. invoked from an API callback.
  0. The `Cart` reducer updates `cart` in the application's state.

* `receiveCartItem`
  0. invoked from an API callback.
  0. The `Cart` reducer updates `cart` in the application's state.

* `removeCartItem`
  0. invoked from an API callback.
  0. The `Cart` reducer updates `cart` in the application's state.

## Reviews Cycles

### Reviews API Request Actions

* `fetchListingReviews`
  0. invoked from `ListingDetail` `didMount`/`willReceiveProps`
  0. `GET /api/listings/:listingId/reviews/` is called.
  0. `receiveListingReviews` is set as the success callback.

* `createReview`
  0. invoked from new review button `onClick`
  0. `POST /api/reviews` is called.
  0. `receiveReview` is set as the callback.

* `destroyReview`
  0. invoked from delete review button `onClick`
  0. `DELETE /api/reviews/:reviewId` is called.
  0. `removeReview` is set as the success callback.

### Reviews API Response Actions

* `receiveListingReviews`
  0. invoked from an API callback.
  0. The `Reviews` reducer updates `reviews` in the application's state.

* `receiveReview`
  0. invoked from an API callback.
  0. The `Reviews` reducer updates `reviews` in the application's state.

* `removeReview`
  0. invoked from an API callback.
  0. The `Reviews` reducer updates `reviews` in the application's state.

## SearchSuggestion Cycles

* `fetchSearchResults`
  0. invoked from `SearchBar` `onSubmit`
  0. `GET /api/listings` is called with search param.
  0. `receiveSearchResults` is set as the success callback.

* `receiveSearchResults`
  0. invoked from an API callback.
  0. The `SearchResults` reducer updates `search_results` in the application's state.
