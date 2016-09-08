import React from 'react';
import ListingIndexItem from './listing_index_item';

const ListingSiblingsIndex = ({ listings, shopName }) => {
  const allListings = listings.map(listing => {
    listing.shop_name = shopName;
    return (
      <ListingIndexItem listing={listing} key={listing.id}
        small={true} />
    );
  });

  return (
    <ul className="listing-siblings-index cf">
      {allListings}
    </ul>
  );
};

export default ListingSiblingsIndex;
