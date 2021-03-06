import React from 'react';
import CartItem from './cart_item';
import { Link, withRouter } from 'react-router';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.numItems = this.numItems.bind(this);
    this.totalItemCost = this.totalItemCost.bind(this);
    this.taxCost = this.taxCost.bind(this);
    this.totalCost = this.totalCost.bind(this);
    this.priceFix = this.priceFix.bind(this);
    this.keepShopping = this.keepShopping.bind(this);
  }

  numItems() {
    return Object.keys(this.props.cart).length;
  }

  totalItemCost() {
    const cartItems = Object.keys(this.props.cart).map(listingId => (
      this.props.cart[listingId]
    ));
    let sum = 0;
    cartItems.forEach(item => {
      sum += (parseFloat(item.quantity) * parseFloat(item.listing_price));
    });

    return sum;
  }

  taxCost() {
    return (Math.round(this.totalItemCost() * 8.25) / 100);
  }

  totalCost() {
    const itemsCost = this.totalItemCost();
    const taxCost = this.taxCost();
    return itemsCost + taxCost;
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

  keepShopping() {
    this.props.router.goBack();
  }

  render() {
    const cartItems = Object.keys(this.props.cart).map(listingId => (
      <CartItem
        item={this.props.cart[listingId]}
        removeCartItem={this.props.removeCartItem}
        updateCartItem={this.props.updateCartItem}
        key={listingId}
      />
    ));

    let cart;

    if (Object.keys(this.props.cart).length < 1) {
      return (
        <div className="cart-page">
          <header className="cart-header ch2">
            <h1>Your cart is empty.</h1>
            <button className="button" onClick={this.keepShopping}>
              Keep shopping
            </button>
          </header>
        </div>
      );
    } else {
      return (
        <div className="cart-page">
          <header className="cart-header">
            <h1>{this.numItems()} items in your cart</h1>
            <button className="button" onClick={this.keepShopping}>
              Keep shopping
            </button>
          </header>

          <main className="cart">
            <section className="cart-items">
              {cartItems}
            </section>

            <aside className="cart-calculations">
              <p>
                <span>Item Total:</span>
                <span>$ {this.priceFix(this.totalItemCost())}</span>
              </p>

              <p>
                <span>Estimated Tax:</span>
                <span>$ {this.priceFix(this.taxCost())}</span>
              </p>

              <p className="grand-total">
                <span>Item Total:</span>
                <span>$ {this.priceFix(this.totalCost())}</span>
              </p>

              <button className="button full-width-button"
                onClick={this.props.deleteUserCart}>
                Checkout
              </button>
            </aside>
          </main>

        </div>
      );
    }
  }
}

export default withRouter(Cart);
