import { connect } from 'react-redux';
import SearchResults from './search_results';

const mapStateToProps = state => ({
  searchQuery: state.search.searchQuery
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
