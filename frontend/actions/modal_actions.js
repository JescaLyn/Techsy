export const ModalsConstants = {
  OPEN_SESSION_MODAL: "OPEN_SESSION_MODAL",
  CLOSE_SESSION_MODAL: "CLOSE_SESSION_MODAL",
  SET_SESSION_MODAL_TYPE: "SET_SESSION_MODAL_TYPE"
};

export const openSessionModal = () => ({
  type: ModalsConstants.OPEN_SESSION_MODAL
});

export const closeSessionModal = () => ({
  type: ModalsConstants.CLOSE_SESSION_MODAL
});

export const setSessionModalType = modalType => ({
  type: ModalsConstants.SET_SESSION_MODAL_TYPE,
  modalType
});
