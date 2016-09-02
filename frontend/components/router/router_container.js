import { connect } from 'react-redux';
import Router from './router';
import { requestListing, requestListings } from '../../actions/listing_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  requestListing: listingId => dispatch(requestListing(listingId)),
  requestListings: () => dispatch(requestListings())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Router);
