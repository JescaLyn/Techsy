import React from 'react';

const ListingIndexItem = ({ listing }) => (
  <li className="listing-item">
    <div className="listing-thumb">
      <img
        src={listing.image_url}
        className="listing-thumb-img"
      />
      <p className="listing-thumb-overlay">
        {listing.subtitle}
      </p>
    </div>
    <div className="listing-card">
      <p>{listing.title}</p>
      <span>
        <p className="shop-name">{listing.shop_name}</p>
        <p className="price">${listing.price}</p>
      </span>
    </div>
  </li>
);

export default ListingIndexItem;
