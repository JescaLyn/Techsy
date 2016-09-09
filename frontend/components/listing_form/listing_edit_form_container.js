import { connect } from 'react-redux';
import ListingEditForm from './listing_edit_form';
import { updateListing, receiveListingErrors }
  from '../../actions/listing_actions';

const mapStateToProps = state => ({
  errors: state.listing.errors,
  shopId: state.session.currentUser.shop_id,
  listing: state.listing.currentListing,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateListing: listing => dispatch(updateListing(listing)),
  receiveListingErrors: errors => dispatch(receiveListingErrors(errors))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingEditForm);
