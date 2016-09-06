import React from 'react';
import { Link } from 'react-router';

class CartItem extends React.Component {
  handleRemove(e) {
    e.preventDefault();
    this.props.removeCartItem(this.props.item.listing_id);
  }

  render() {
    return (
      <div className="cart-item">
        <Link to={"/listings/" + this.props.item.listing_id} >
          <img src={this.props.item.listing_image_url}
            className="cart-item-img" />
        </Link>

        <section className="cart-item-details">
          <Link to={"/listings/" + this.props.item.listing_id}
            className="cart-item-title">
            {this.props.item.listing_title}
          </Link>
          <p>{this.props.item.listing_subtitle}</p>
          <a
            className="remove-link"
            href="#"
            onClick={this.handleRemove.bind(this)}>
            Remove
          </a>
        </section>
        <p className="listing-index-price">
          $ {this.props.item.listing_price}
        </p>
      </div>
    );
  }
}

export default CartItem;
