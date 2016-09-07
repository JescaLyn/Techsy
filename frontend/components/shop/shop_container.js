import { connect } from 'react-redux';
import Shop from './shop';

const mapStateToProps = state => ({
  listings: state.listings
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
