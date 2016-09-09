export const SearchConstants = {
  RECEIVE_SEARCH_QUERY: "RECEIVE_SEARCH_QUERY",
  CLEAR_SEARCH_QUERY: "CLEAR_SEARCH_QUERY",
  REQUEST_SEARCH_TERMS: "REQUEST_SEARCH_TERMS",
  RECEIVE_SEARCH_TERMS: "RECEIVE_SEARCH_TERMS"
};

export const receiveSearchQuery = searchQuery => ({
  type: SearchConstants.RECEIVE_SEARCH_QUERY,
  searchQuery
});

export const clearSearchQuery = () => ({
  type: SearchConstants.CLEAR_SEARCH_QUERY
});

export const requestSearchTerms = () => ({
  type: SearchConstants.REQUEST_SEARCH_TERMS
});

export const receiveSearchTerms = searchTerms => ({
  type: SearchConstants.RECEIVE_SEARCH_TERMS,
  searchTerms
});
