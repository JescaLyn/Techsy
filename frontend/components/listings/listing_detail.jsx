import React from 'react';
import ListingSiblingsIndex from './listing_siblings_index';
import Select from 'react-select';

class ListingDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemDetails: "active",
      reviews: "inactive",
      quantity: "1"
    };
    this.handleTabClick = this.handleTabClick.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.addToCart = this.addToCart.bind(this);
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

  updateQuantity(option) {
    this.setState({ quantity: option.value });
  }

  addToCart() {
    const listing = this.props.listing;
    const cartItem = {
      listing_id: listing.id,
      listing_image_url: listing.image_url,
      listing_price: listing.price,
      listing_subtitle: listing.subtitle,
      listing_title: listing.title,
      quantity: this.state.quantity,
      shop_id: listing.shop_id,
      shop_logo: listing.shop_logo,
      shop_name: listing.shop_name
    };
    this.props.updateCartItem(cartItem);
  }

  render() {
    const listing = this.props.listing;
    let listingSiblings = [];
    if (listing.siblings) {
      listingSiblings = <ListingSiblingsIndex
        listings={listing.siblings}
        shopName={listing.shop_name} />;
    }

    const quantityOptions = Array(this.props.listing.quantity)
      .fill()
      .map((_, i) => ({
        value: `${i + 1}`,
        label: `${i + 1}`
      }));

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
              <label>Quantity
                <Select
                  className="listing-detail-quantity"
                  value={this.state.quantity}
                  options={quantityOptions}
                  onChange={this.updateQuantity}
                  searchable={false}
                  clearable={false}
                />
              </label>

              <button
                className="button"
                onClick={this.addToCart}>Add to cart</button>
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
