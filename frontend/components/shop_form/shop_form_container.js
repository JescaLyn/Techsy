import { connect } from 'react-redux';
import ShopForm from './shop_form';
import { createShop, receiveShopErrors } from '../../actions/shop_actions';

const mapStateToProps = state => ({
  errors: state.shop.errors,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createShop: shop => dispatch(createShop(shop)),
  receiveShopErrors: errors => dispatch(receiveShopErrors(errors))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopForm);
