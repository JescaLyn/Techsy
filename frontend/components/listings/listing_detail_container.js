import { connect } from 'react-redux';
import ListingDetail from './listing_detail';
import { logout } from '../../actions/session_actions';
import { updateCartItem, receiveCartItem } from '../../actions/cart_actions';

const mapStateToProps = state => ({
  listing: state.listing.currentListing
});

const mapDispatchToProps = dispatch => ({
  updateCartItem: cartItem => dispatch(updateCartItem(cartItem))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingDetail);
