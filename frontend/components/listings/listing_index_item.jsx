import React from 'react';
import { Link } from 'react-router';

const ListingIndexItem = ({ listing, router }) => (
  <Link to={`/listings/${listing.id}`}>
    <li className="listing-item">
      <div className="listing-thumb">
        <img
          src={listing.image_url}
          className="listing-thumb-img"
        />
        <div className="listing-thumb-overlay">
          <p>{listing.subtitle}</p>
        </div>
      </div>
      <div className="listing-card">
        <p>{listing.title}</p>
        <span>
          <p className="listing-index-shop-name">{listing.shop_name}</p>
          <p className="listing-index-price">${listing.price}</p>
        </span>
      </div>
    </li>
  </Link>
);

export default ListingIndexItem;
