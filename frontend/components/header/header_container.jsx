import { connect } from 'react-redux';
import Header from './header';
import { openSessionModal, setSessionModalType }
  from '../../actions/modal_actions';
import { logout, login } from '../../actions/session_actions';
import { requestListings } from '../../actions/listing_actions';
import { receiveSearchQuery, requestSearchTerms }
  from '../../actions/search_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  searchTerms: state.search.searchTerms
});

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openSessionModal()),
  setSessionModalType: type => dispatch(setSessionModalType(type)),
  logout: () => dispatch(logout()),
  guestLogin: () => (
    dispatch(login({ user: { username: "Guest", password: "password" }}))
  ),
  requestListings: filters => dispatch(requestListings(filters)),
  receiveSearchQuery: searchQuery => dispatch(receiveSearchQuery(searchQuery)),
  requestSearchTerms: () => dispatch(requestSearchTerms())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
