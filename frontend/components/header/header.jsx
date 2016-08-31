import React from 'react';
import { Link } from 'react-router';
import NavLoggedOut from './nav_logged_out';
import NavLoggedIn from './nav_logged_in';

class Header extends React.Component {

  render() {
    let nav;

    if (this.props.currentUser) {
      nav = <NavLoggedIn
        openModal={this.props.openModal}
        currentUser={this.props.currentUser}
        />;
    } else {
      nav = <NavLoggedOut
        openModal={this.props.openModal}
        setSessionModalType={this.props.setSessionModalType}
        />;
    }

    return (
      <header>
        <div className="logo">
          Techsy!
        </div>
        {nav}
      </header>
    );
  }
}

export default Header;
