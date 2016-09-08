import React from 'react';
import { Link } from 'react-router';

const ListingIndexItem = ({ listing, small }) => {
  const title = () => {
    if (!small && listing.title.length > 38) {
      return (listing.title.slice(0, 38) + "...");
    } else if (small && listing.title.length > 25) {
      return (listing.title.slice(0, 25) + "...");
    } else {
      return listing.title;
    }
  };

  const smallClass = () => {
    return (small ? " small" : "");
  };

  return (
    <Link to={`/listings/${listing.id}`}>
      <li className="listing-item">
        <div className="listing-thumb">
          <img
            src={listing.image_url}
            className="listing-thumb-img"
          />
          <div className="listing-thumb-overlay">
            <p className={smallClass()} >{listing.subtitle}</p>
          </div>
        </div>
        <div className="listing-card">
          <p className={"listing-card-title" + smallClass()}>{title()}</p>
          <span>
            <p className={"listing-index-shop-name" + smallClass()}>
              {listing.shop_name}
            </p>
            <p className={"listing-index-price" + smallClass()}>
              ${listing.price}
            </p>
          </span>
        </div>
      </li>
    </Link>
  );
};

export default ListingIndexItem;
