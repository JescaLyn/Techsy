import { connect } from 'react-redux';
import Cart from './cart';
import { removeCartItem, updateCartItem, deleteUserCart }
  from '../../actions/cart_actions';

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  removeCartItem: listingId => dispatch(removeCartItem(listingId)),
  updateCartItem: cartItem => dispatch(updateCartItem(cartItem)),
  deleteUserCart: () => dispatch(deleteUserCart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
