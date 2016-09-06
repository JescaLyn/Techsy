import { connect } from 'react-redux';
import Cart from './cart';
import { removeCartItem, updateCartItem } from '../../actions/cart_actions';

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  removeCartItem: listingId => dispatch(removeCartItem(listingId)),
  updateCartItem: cartItem => dispatch(updateCartItem(cartItem))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
