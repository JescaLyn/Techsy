import React from 'react';
import { Link } from 'react-router';

const CartLink = () => (
  <li className="cart-link">
    <Link to="/cart">
      <img className="cart-icon" src="http://res.cloudinary.com/dzikfml7y/image/upload/c_scale,w_50/v1472685524/cart_icon_attempt1_l3lykg.png"/>
      <span>Cart</span>
    </Link>
  </li>
);

export default CartLink;
