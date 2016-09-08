import { connect } from 'react-redux';
import ShopForm from './shop_form';
import { createShop, receiveErrors } from '../../actions/shop_actions';

const mapStateToProps = state => ({
  errors: state.shop.errors,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createShop: shop => dispatch(createShop(shop)),
  receiveErrors: errors => dispatch(receiveErrors(errors))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopForm);
