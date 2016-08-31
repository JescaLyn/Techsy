import React from 'react';
import { Link } from 'react-router';

const NavLoggedOut = ({ openModal, currentUser }) => {
  let shopLink;
  if (currentUser.shop) {
    shopLink = <Link to={"/shop/" + currentUser.shop.name}>Your Shop</Link>;
  } else {
    shopLink = <Link to="/sell-on-techsy">Sell on Techsy</Link>;
  }

  return (
    <nav>
      <ul>
        <li>{shopLink}</li>

        <li>
          <Link to={"/people/" + currentUser.username}>You</Link>
        </li>

        <li className="cart-link">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLoggedOut;
