import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {

  render() {
    return (
      <header>
        <div className="logo">
          Logo will go here
        </div>

        <nav>
          <ul>
            <li><Link to="/sell-on-techsy">Sell on Techsy</Link></li>
            <li>Register</li>
            <li>Sign in</li>
            <li>Cart logo</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
