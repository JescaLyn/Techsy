import React from 'react';
import { Link } from 'react-router';

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

          <li className="cart-link">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavLoggedOut;
