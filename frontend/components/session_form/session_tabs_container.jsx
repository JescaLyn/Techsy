import { connect } from 'react-redux';
import SessionTabs from './session_tabs';
import { login, signup, clearSessionErrors }
  from '../../actions/session_actions';
import { setSessionModalType } from "../../actions/modal_actions";

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  modalType: state.modals.session.modalType
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
  setModalRegister: () => dispatch(setSessionModalType("register")),
  setModalLogin: () => dispatch(setSessionModalType("login")),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionTabs);
