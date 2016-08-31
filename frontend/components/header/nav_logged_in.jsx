import React from 'react';
import { Link } from 'react-router';
import CartLink from './cart_link';

const NavLoggedOut = ({ openModal, currentUser, logout }) => {
  let shopLink;
  if (currentUser.shop) {
    shopLink = <Link to={"/shop/" + currentUser.shop.name}>Your Shop</Link>;
  } else {
    shopLink = <Link to="/sell-on-techsy">Sell on Techsy</Link>;
  }

  return (
    <nav>
      <ul>
        <li className="nav-link">
          <button onClick={logout}>Logout</button>
        </li>

        <li className="nav-link">{shopLink}</li>

        <li className="nav-link">
          <Link to={"/people/" + currentUser.username}>You</Link>
        </li>

        <CartLink />
      </ul>
    </nav>
  );
};

export default NavLoggedOut;
