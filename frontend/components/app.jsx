import React from 'react';
import SessionForm from './session_form/session_form';
import HeaderContainer from './header/header_container';
import Modal from 'react-modal';

document.addEventListener("DOMContentLoaded", () => {
  Modal.setAppElement(document.body);
});


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: true
    };
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div id="app">
        <HeaderContainer openModal={this.openModal.bind(this)} />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal.bind(this)}
          className="modal" >

          <SessionForm closeModal={this.closeModal.bind(this)} />
        </Modal>
        {this.props.children}
      </div>
    );
  }
}

export default App;
