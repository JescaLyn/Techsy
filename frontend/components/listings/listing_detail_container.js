import { connect } from 'react-redux';
import ListingDetail from './listing_detail';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  listing: state.listing.currentListing
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingDetail);
