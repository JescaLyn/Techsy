import React from 'react';
import { Link } from 'react-router';
import NavLoggedOut from './nav_logged_out';
import NavLoggedIn from './nav_logged_in';
import SearchBar from './search_bar';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.props.requestSearchTerms();
  }

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
        guestLogin={this.props.guestLogin}
        />;
    }

    return (
      <header>
        <div className="left-nav">
          <Link to="/">
            <img className="logo"
              src="http://res.cloudinary.com/dzikfml7y/image/upload/v1472686007/logo_zhmtia.png" />
          </Link>
          <SearchBar
            requestListings={this.props.requestListings}
            receiveSearchQuery={this.props.receiveSearchQuery}
            listings={this.props.listings}
            searchTerms={this.props.searchTerms}
          />
        </div>
        {nav}
      </header>
    );
  }
}

export default Header;
