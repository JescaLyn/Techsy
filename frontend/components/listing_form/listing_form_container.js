import { connect } from 'react-redux';
import ListingForm from './listing_form';
import { createListing, receiveErrors } from '../../actions/listing_actions';

const mapStateToProps = state => ({
  errors: state.listing.errors,
  shopId: state.shop.currentShop.id
});

const mapDispatchToProps = dispatch => ({
  createListing: listing => dispatch(createListing(listing)),
  receiveErrors: errors => dispatch(receiveErrors(errors))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingForm);
