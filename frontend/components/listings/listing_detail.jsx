import React from 'react';
import ListingSiblingsIndex from './listing_siblings_index';

class ListingDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemDetails: "active",
      reviews: "inactive"
    };
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(e) {
    if (e.currentTarget.textContent === "Reviews") {
      this.setState({
        itemDetails: "inactive",
        reviews: "active"
      });
    } else {
      this.setState({
        itemDetails: "active",
        reviews: "inactive"
      });
    }
  }

  render() {
    const listing = this.props.listing;
    let listingSiblings = [];
    if (listing.siblings) {
      listingSiblings = <ListingSiblingsIndex
        listings={listing.siblings}
        shopName={listing.shop_name} />;
    }

    return (
      <main className="listing-detail">

        <div className="listing-detail-shop-banner">
          <img
            src={listing.shop_image_url}
            className="listing-detail-shop-logo"
          />
          <p className="listing-detail-shop-name">
            {listing.shop_name}
          </p>
        </div>

        <div className="listing-detail-box">

          <section className="listing-detail-main">
            <img src={listing.image_url} />

            <section className="listing-detail-tabs-container">
              <ul className="listing-detail-tabs cf">
                <li className={this.state.itemDetails}
                  onClick={this.handleTabClick} >
                  Item Details
                </li>
                <li className={this.state.reviews}
                  onClick={this.handleTabClick} >
                  Reviews
                </li>
              </ul>

              <p className="listing-description">
                {listing.description}
              </p>
            </section>

          </section>

          <aside className="listing-detail-aside">
            <section className="listing-detail-overview">
              <p className="listing-big-text">{listing.title}</p>
              <p className="listing-big-text">${listing.price}</p>
              <p>{listing.subtitle}</p>
              <label>Quantity:&nbsp;
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </label>

              <button className="button">Add to cart</button>
            </section>

            <section className="listing-detail-shop cf">
              <img
                src={listing.shop_image_url}
                className="small-shop-logo"
              />
              <p>{listing.shop_name}</p>
              {listingSiblings}
            </section>
          </aside>

        </div>
      </main>
    );
  }
}

export default ListingDetail;
