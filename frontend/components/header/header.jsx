import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  openModal() {
    this.props.openModal();
  }

  render() {
    return (
      <header>
        <div className="logo">
          Techsy!
        </div>

        <nav>
          <ul>
            <li><Link to="/sell-on-techsy">Sell on Techsy</Link></li>
            <li onClick={this.openModal.bind(this)}>Register</li>
            <li onClick={this.openModal.bind(this)}>Sign in</li>
            <li>Cart logo</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
