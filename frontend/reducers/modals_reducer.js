import { ModalConstants } from '../actions/modal_actions';
import { merge } from 'lodash';

const defaultState = {
  session: {
    open: false,
    modalType: "register",
    destination: null
  }
};

const ModalsReducer = (state = defaultState, action) => {
  const newState = merge({}, state);

  switch (action.type) {
    case ModalConstants.OPEN_SESSION_MODAL:
      newState.session.open = true;
      newState.session.destination = action.destination;
      return newState;
    case ModalConstants.CLOSE_SESSION_MODAL:
      newState.session.open = false;
      return newState;
    case ModalConstants.SET_SESSION_MODAL_TYPE:
      newState.session.modalType = action.modalType;
      return newState;
    case ModalConstants.CLEAR_DESTINATION:
      newState.session.destination = null;
      return newState;
    default:
      return state;
  }
};

export default ModalsReducer;
