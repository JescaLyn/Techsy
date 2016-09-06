import React from 'react';

class Cart extends React.Component {
  render() {
    return (
      <div><pre>{JSON.stringify(this.props.cart, null, 2)}</pre></div>
    );
  }
}

export default Cart;
