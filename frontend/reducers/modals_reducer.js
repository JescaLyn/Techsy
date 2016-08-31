import { ModalsConstants } from '../actions/modal_actions';
import { merge } from 'lodash';

const defaultState = {
  session: {
    open: false,
    modalType: "register"
  }
};

const ModalsReducer = (state = defaultState, action) => {
  const newState = merge({}, state);

  switch (action.type) {
    case ModalsConstants.OPEN_SESSION_MODAL:
      newState.session.open = true;
      return newState;
    case ModalsConstants.CLOSE_SESSION_MODAL:
      newState.session.open = false;
      return newState;
    case ModalsConstants.SET_SESSION_MODAL_TYPE:
      newState.session.modalType = action.modalType;
      return newState;
    default:
      return state;
  }
};

export default ModalsReducer;
