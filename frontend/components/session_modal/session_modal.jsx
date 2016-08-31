import React from 'react';
import Modal from 'react-modal';
import SessionForm from '../session_form/session_form';

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
        <SessionForm closeModal={this.closeModal.bind(this)} />
      </Modal>
    );
  }
}

export default SessionModal;
