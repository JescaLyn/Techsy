import { connect } from 'react-redux';
import SessionModal from './session_modal';
import * as Actions from '../../actions/modal_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = state => ({
  open: state.modals.session.open
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(Actions.closeSessionModal()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionModal);
