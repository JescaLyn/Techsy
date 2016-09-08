export const ModalConstants = {
  OPEN_SESSION_MODAL: "OPEN_SESSION_MODAL",
  CLOSE_SESSION_MODAL: "CLOSE_SESSION_MODAL",
  SET_SESSION_MODAL_TYPE: "SET_SESSION_MODAL_TYPE",
  CLEAR_DESTINATION: "CLEAR_DESTINATION"
};

export const openSessionModal = (destination) => ({
  type: ModalConstants.OPEN_SESSION_MODAL,
  destination
});

export const closeSessionModal = () => ({
  type: ModalConstants.CLOSE_SESSION_MODAL
});

export const setSessionModalType = modalType => ({
  type: ModalConstants.SET_SESSION_MODAL_TYPE,
  modalType
});

export const clearDestination = () => ({
  type: ModalConstants.CLEAR_DESTINATION
});
