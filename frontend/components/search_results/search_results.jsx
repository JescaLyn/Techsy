import React from 'react';
import ListingIndexContainer from '../listings/listing_index_container';

const SearchResults = ({ searchQuery }) => (
  <div className="search-results-page">
    <h1>Search Results for "{searchQuery}"</h1>
    <ListingIndexContainer />
  </div>
);

export default SearchResults;
