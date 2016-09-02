import React from 'react';
import ListingIndexItem from './listing_index_item';

const ListingIndex = ({ listings }) => {
  const allListings = listings.map(listing => (
    <ListingIndexItem listing={listing} key={listing.id} />
  ));

  return (
    <ul className="listing-index cf">
      {allListings}
    </ul>
  );
};

export default ListingIndex;
