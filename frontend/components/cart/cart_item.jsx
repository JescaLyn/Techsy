import React from 'react';
import { Link } from 'react-router';

const CartItem = ({ item }) => (
  <div className="cart-item">
    <Link to={"/listings/" + item.listing_id} >
      <img src={item.listing_image_url} className="cart-item-img" />
    </Link>

    <section className="cart-item-details">
      <Link to={"/listings/" + item.listing_id} className="cart-item-title">
        {item.listing_title}
      </Link>
      <p>{item.listing_subtitle}</p>
      <a href="#">Remove</a>
    </section>
    <p className="listing-index-price">{item.listing_price}</p>
  </div>
);

export default CartItem;
