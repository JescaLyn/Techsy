import { connect } from 'react-redux';
import ListingForm from './listing_form';
import { createListing, receiveListingErrors } from '../../actions/listing_actions';

const mapStateToProps = state => ({
  errors: state.listing.errors,
  shopId: state.session.currentUser.shop_id
});

const mapDispatchToProps = dispatch => ({
  createListing: listing => dispatch(createListing(listing)),
  receiveListingErrors: errors => dispatch(receiveListingErrors(errors))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingForm);
