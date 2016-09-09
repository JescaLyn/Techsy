import { SessionConstants, receiveCurrentUser, receiveSessionErrors }
  from '../actions/session_actions';
import { closeSessionModal, clearDestination } from '../actions/modal_actions';
import { mergeExistingCart, clearCart } from '../actions/cart_actions';
import { login, signup, logout, fetchCurrentUser }
  from "../util/session_api_util";
import { hashHistory } from 'react-router';

const SessionMiddleware = ({ getState, dispatch }) => next => action => {
  let success = user => {
    const destination = getState().modals.session.destination;

    dispatch(receiveCurrentUser(user));
    if (destination) {
      hashHistory.push(destination);
    }
    dispatch(clearDestination());
    dispatch(closeSessionModal());
    dispatch(mergeExistingCart());
  };

  const error = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveSessionErrors(errors));
  };

  switch (action.type) {
    case SessionConstants.SIGN_UP:
      signup(action.user, success, error);
      return next(action);
    case SessionConstants.LOGIN:
      login(action.user, success, error);
      return next(action);
    case SessionConstants.LOGOUT:
      success = () => {
        dispatch(clearCart());
        hashHistory.push("/");
        next(action);
      };
      logout(success);
      break;
    case SessionConstants.REQUEST_CURRENT_USER:
      success = user => dispatch(receiveCurrentUser(user));
      fetchCurrentUser(action.userId, success, error);
    default:
      next(action);
  }
};

export default SessionMiddleware;
