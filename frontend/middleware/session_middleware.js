import { SessionConstants, receiveCurrentUser, receiveErrors }
  from '../actions/session_actions';
import { login, signup, logout } from "../util/session_api_util";

const SessionMiddleware = ({ getState, dispatch }) => next => action => {
  const success = user => dispatch(receiveCurrentUser(user));
  const error = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };

  switch (action.type) {
    case SessionConstants.SIGN_UP:
      signup(action.user, success, error);
      return next(action);
    case SessionConstants.LOGIN:
      login(action.user, success, error);
      return next(action);
    case SessionConstants.LOGOUT:
      logout(() => next(action));
      break;
    default:
      next(action);
  }
};

export default SessionMiddleware;
