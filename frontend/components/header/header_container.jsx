import { connect } from 'react-redux';
import Header from './header';
import { openSessionModal, setSessionModalType }
  from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openSessionModal()),
  setSessionModalType: type => dispatch(setSessionModalType(type)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
