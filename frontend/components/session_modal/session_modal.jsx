import React from 'react';
import Modal from 'react-modal';
import SessionTabsContainer from '../session_form/session_tabs_container';

document.addEventListener("DOMContentLoaded", () => {
  Modal.setAppElement(document.body);
});

class SessionModal extends React.Component {

  closeModal() {
    this.props.closeModal();
    this.props.clearErrors();
  }

  render() {
    return (
      <Modal
        isOpen={this.props.open}
        onRequestClose={this.closeModal.bind(this)}
        className="modal" >
        <SessionTabsContainer />
      </Modal>
    );
  }
}

export default SessionModal;
