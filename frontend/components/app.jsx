import React from 'react';
import SessionForm from './session_form/session_form';
import HeaderContainer from './header/header_container';
import Modal from 'react-modal';

const App = ({ children }) => (
  <div>
    <HeaderContainer />
    <h1>Techsy!</h1>
    <SessionForm />
    {children}
  </div>
);

export default App;
