import React from 'react';
import { Link } from 'react-router';
import Select from 'react-select';

class CartItem extends React.Component {
  handleRemove(e) {
    e.preventDefault();
    this.props.removeCartItem(this.props.item.listing_id);
  }

  updateQuantity(e) {
    this.props.updateCartItem({
      listing_id: this.props.item.listing_id,
      quantity: e.currentTarget.value,
      in_cart: true
    });
  }

  priceFix(price) {
    let priceSplit = price.toString().split(".");

    if (priceSplit[priceSplit.length - 1].length < 2) {
      return (price + "0");
    } else if (priceSplit.length === 1) {
      return (price + ".00");
    } else {
      return price;
    }
  }

  itemPrice() {
    const item = this.props.item;

    if (parseFloat(item.quantity) > 1.5) {
      let price = parseFloat(item.listing_price) * parseFloat(item.quantity);

      return (
        <div>
          <p className="cart-item-price">
            $ {this.priceFix(price)}
          </p>
          <p className="cart-item-ind-price">
            (${this.props.item.listing_price} each)</p>
        </div>
      );
    } else {
      return (
        <p className="cart-item-price">
          $ {this.props.item.listing_price}
        </p>
      );
    }
  }

  render() {
    const quantityOptions = Array(parseInt(this.props.item.listing_quantity))
      .fill()
      .map((_, i) => (
        <option value={i + 1} key={i}>
          {i + 1}
        </option>
      ));

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

        <select className="cart-quantity"
          onChange={this.updateQuantity.bind(this)}
          defaultValue={this.props.item.quantity}>
          {quantityOptions}
        </select>

        {this.itemPrice()}

      </div>
    );
  }
}

export default CartItem;
