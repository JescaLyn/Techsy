import { connect } from 'react-redux';
import Router from './router';
import { requestListing, requestListings } from '../../actions/listing_actions';
import { requestShop } from '../../actions/shop_actions';
import { requestSearchTerms } from '../../actions/search_actions';
import { openSessionModal } from '../../actions/modal_actions';
import { requestCurrentUser } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestListing: listingId => dispatch(requestListing(listingId)),
  requestListings: filters => dispatch(requestListings(filters)),
  requestShop: shopId => dispatch(requestShop(shopId)),
  openSessionModal: () => dispatch(openSessionModal()),
  requestCurrentUser: userId => dispatch(requestCurrentUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Router);
