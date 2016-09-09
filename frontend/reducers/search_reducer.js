import { SearchConstants } from '../actions/search_actions';
import { merge } from 'lodash';

const defaultState = {
  searchQuery: "",
  searchTerms: []
};

const SearchReducer = (state = defaultState, action) => {
  const newState = merge({}, state);

  switch (action.type) {
    case SearchConstants.RECEIVE_SEARCH_QUERY:
      newState.searchQuery = action.searchQuery;
      return newState;
    case SearchConstants.CLEAR_SEARCH_QUERY:
      newState.searchQuery = "";
      return newState;
    case SearchConstants.RECEIVE_SEARCH_TERMS:
      newState.searchTerms = action.searchTerms;
      return newState;
    default:
      return state;
  }
};

export default SearchReducer;
