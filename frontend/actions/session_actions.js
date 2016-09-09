export const SessionConstants = {
  SIGN_UP: "SIGN_UP",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  REQUEST_CURRENT_USER: "REQUEST_CURRENT_USER",
  RECEIVE_CURRENT_USER: "RECEIVE_CURRENT_USER",
  RECEIVE_SESSION_ERRORS: "RECEIVE_SESSION_ERRORS",
  CLEAR_SESSION_ERRORS: "CLEAR_SESSION_ERRORS"
};

export const signup = user => ({
  type: SessionConstants.SIGN_UP,
  user
});

export const login = user => ({
  type: SessionConstants.LOGIN,
  user
});

export const logout = () => ({
  type: SessionConstants.LOGOUT
});

export const receiveCurrentUser = user => ({
  type: SessionConstants.RECEIVE_CURRENT_USER,
  user
});

export const requestCurrentUser = userId => ({
  type: SessionConstants.REQUEST_CURRENT_USER,
  userId
});

export const receiveSessionErrors = errors => ({
  type: SessionConstants.RECEIVE_SESSION_ERRORS,
  errors
});

export const clearSessionErrors = () => ({
  type: SessionConstants.CLEAR_SESSION_ERRORS
});
