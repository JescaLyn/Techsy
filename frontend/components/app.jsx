import React from 'react';
import HeaderContainer from './header/header_container';
import SessionModalContainer from './session_modal/session_modal_container';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: true
    };
  }

  render() {
    return (
      <div id="app">
        <HeaderContainer />
        {this.props.children}
        <SessionModalContainer />
      </div>
    );
  }
}

export default App;
