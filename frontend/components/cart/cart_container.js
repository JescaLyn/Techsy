import { connect } from 'react-redux';
import Cart from './cart';
import { logout } from '../../actions/session_actions';
import { updateCartItem, receiveCartItem } from '../../actions/cart_actions';

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
