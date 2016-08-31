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
        logout={this.props.logout}
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
          <Link to="/">
            <img src="http://res.cloudinary.com/dzikfml7y/image/upload/v1472686007/logo_zhmtia.png" />
          </Link>
        </div>
        {nav}
      </header>
    );
  }
}

export default Header;
