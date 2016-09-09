import React from 'react';
import { Link } from 'react-router';
import CartLink from './cart_link';

const NavLoggedIn = ({ openModal, currentUser, logout }) => {
  let shopLink;
  if (currentUser.shop_id) {
    shopLink = (
      <li className="shop-link">
        <Link to={`/shops/${currentUser.shop_id}`}>
          <img
            src="http://res.cloudinary.com/dzikfml7y/image/upload/v1473439362/shop_icon_ua0lue.png"
            className="shop-icon" />
          <span>Your Shop</span>
        </Link>
      </li>
    );
  } else {
    shopLink = (
      <li className="nav-link">
        <Link to="/sell-on-techsy">Sell on Techsy</Link>
      </li>
    );
  }

  return (
    <nav>
      <ul>
        <li className="login-link">
          <button onClick={logout}>Logout</button>
        </li>

        {shopLink}

        <CartLink />
      </ul>
    </nav>
  );
};

export default NavLoggedIn;
