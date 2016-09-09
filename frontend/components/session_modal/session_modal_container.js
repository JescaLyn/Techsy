import { connect } from 'react-redux';
import SessionModal from './session_modal';
import * as Actions from '../../actions/modal_actions';
import { clearSessionErrors } from '../../actions/session_actions';

const mapStateToProps = state => ({
  open: state.modals.session.open
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(Actions.closeSessionModal()),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionModal);
