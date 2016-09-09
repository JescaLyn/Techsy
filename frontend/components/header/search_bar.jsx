import React from 'react';
import { withRouter } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search_filter: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateSearchFilter = this.updateSearchFilter.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveSearchQuery(this.state.search_filter);
    this.props.requestListings(this.state);
    this.props.router.push("/search-results");
  }

  updateSearchFilter(e) {
    this.setState({ search_filter: e.target.value });
  }

  render() {
    return(
      <form className="search-bar" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Search for items"
          className="search-input text"
          onChange={this.updateSearchFilter}
        />

        <button className="search-button">
          Search
        </button>
      </form>
    );
  }
}

export default withRouter(SearchBar);
