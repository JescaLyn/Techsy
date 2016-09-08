import { connect } from 'react-redux';
import SellSplash from './sell_splash';
import { openSessionModal, setSessionModalType }
  from '../../actions/modal_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  openModal: destination => dispatch(openSessionModal(destination)),
  setSessionModalType: type => dispatch(setSessionModalType(type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SellSplash);
