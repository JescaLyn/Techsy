import { connect } from 'react-redux';
import ListingIndex from './listing_index';

const mapStateToProps = state => ({
  listings: state.listings
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingIndex);
