import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  openModal: ownProps.openModal
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
