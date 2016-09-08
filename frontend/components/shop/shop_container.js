import { connect } from 'react-redux';
import Shop from './shop';

const mapStateToProps = state => ({
  shop: state.shop.currentShop,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
