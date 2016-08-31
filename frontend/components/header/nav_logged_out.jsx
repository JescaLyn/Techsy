import React from 'react';
import { Link } from 'react-router';
import CartLink from './cart_link';

class NavLoggedOut extends React.Component {
  handleClick(type) {
    this.props.openModal();
    this.props.setSessionModalType(type);
  }

  render() {
    return (
      <nav>
        <ul>
          <li className="nav-link">
            <Link to="/sell-on-techsy">Sell on Techsy</Link>
          </li>

          <li onClick={this.handleClick.bind(this, "register")}
            className="nav-link">
            Register
          </li>

          <li onClick={this.handleClick.bind(this, "login")}
            className="login-link">
            Login
          </li>

          <CartLink />
        </ul>
      </nav>
    );
  }
}

export default NavLoggedOut;
