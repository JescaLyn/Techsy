export const ModalConstants = {
  OPEN_SESSION_MODAL: "OPEN_SESSION_MODAL",
  CLOSE_SESSION_MODAL: "CLOSE_SESSION_MODAL",
  SET_SESSION_MODAL_TYPE: "SET_SESSION_MODAL_TYPE"
};

export const openSessionModal = () => ({
  type: ModalConstants.OPEN_SESSION_MODAL
});

export const closeSessionModal = () => ({
  type: ModalConstants.CLOSE_SESSION_MODAL
});

export const setSessionModalType = modalType => ({
  type: ModalConstants.SET_SESSION_MODAL_TYPE,
  modalType
});
