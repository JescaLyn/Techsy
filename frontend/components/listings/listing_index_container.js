import { connect } from 'react-redux';
import ListingIndex from './listing_index';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  listings: state.listings
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingIndex);
