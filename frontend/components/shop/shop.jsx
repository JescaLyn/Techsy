import React from 'react';
import ListingIndexContainer from '../listings/listing_index_container';
import { Link } from 'react-router';

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

        <div className="shop-banner">
          <div className="shop-details">

            <div className="shop-info">
              <img src={shop.image_url} />
              <div className="shop-text">
                <h2>{shop.name}</h2>
                <p>{shop.description}</p>
                <p>On Techsy since {year}</p>
                <p><img src="http://cliparts.co/cliparts/gce/oXx/gceoXx7gi.png"/></p>
              </div>
            </div>

            <div className = "shop-owner">
              <p>SHOP OWNER</p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/2000px-Smiley.svg.png" />
              <a href="#">Contact the Owner</a>
            </div>

          </div>
        </div>

        {createListing()}

        <ListingIndexContainer />
      </div>
    );
  }
}

export default Shop;
