import { SearchConstants, receiveSearchTerms } from '../actions/search_actions';
import { fetchSearchTerms } from "../util/search_api_util";

const SearchMiddleware = ({ getState, dispatch }) => next => action => {
  const success = data => dispatch(receiveSearchTerms(data));
  const error = () => console.log("error fetching search terms");

  switch (action.type) {
    case SearchConstants.REQUEST_SEARCH_TERMS:
      fetchSearchTerms(success, error);
      return next(action);
    default:
      next(action);
  }
};

export default SearchMiddleware;
