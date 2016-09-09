import React from 'react';
import ListingIndexContainer from '../listings/listing_index_container';
import { Link } from 'react-router';
import ReactStars from 'react-stars';

class Shop extends React.Component {
  render() {
    const shop = this.props.shop;
    const year = shop.created_at ? shop.created_at.slice(0,4) : "";
    const currentUser = this.props.currentUser;
    const createListing = () => {
      if (currentUser && currentUser.shop_id === shop.id) {
        return (
          <Link to="/listing/create" className="create-listing-link">
            Create New Listing
          </Link>
        );
      }
    };

    return (
      <div className="shop-page">

          <div className="shop-details">

              <img src={shop.image_url} />
              <div className="shop-info">
                <h2>{shop.name}</h2>
                <p>{shop.description}</p>
                <p className="grayed">
                  On Techsy since {year} ~ {shop.country}
                </p>
                <ReactStars
                  value={shop.average_rating}
                  size={24}
                  edit={false}
                  color2={'#ffa700'} />
              </div>

          </div>

        {createListing()}

        <ListingIndexContainer />
      </div>
    );
  }
}

export default Shop;
