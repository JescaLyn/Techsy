import { connect } from 'react-redux';
import Header from './header';
import { openSessionModal, setSessionModalType }
  from '../../actions/modal_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openSessionModal()),
  setSessionModalType: type => dispatch(setSessionModalType(type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
