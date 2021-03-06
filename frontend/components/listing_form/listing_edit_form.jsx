import React from 'react';

class ListingForm extends React.Component {
  constructor(props) {
    super(props);
    const listing = this.props.listing;

    this.state = {
      id: listing.id,
      title: listing.title,
      subtitle: listing.subtitle,
      description: listing.description,
      price: listing.price,
      quantity: listing.quantity,
      image_url: listing.image_url,
      shop_id: this.props.shopId
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.openCloudinaryWidget = this.openCloudinaryWidget.bind(this);
  }

  update(field, e) {
    let newState = {};
    newState[field] = e.target.value;
    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateListing({ listing: this.state });
  }

  renderErrors(){
    return(
      <ul>
        {this.props.errors.map( (error, i) => (
          <li key={`error-${i}`} className="error">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleImageUpload(error, result) {
    if (error) {
      this.props.receiveListingErrors([error]);
    } else {
      this.setState({ image_url: result[0].url });
    }
  }

  openCloudinaryWidget() {
    cloudinary.openUploadWidget(
      cloudinary_options,
      this.handleImageUpload
    );
  }

  render() {
    return (
      <div className="listing-form-page">
        <h1>Edit this listing</h1>

        <form onSubmit={this.handleSubmit} className="listing-form">
          {this.renderErrors()}

          <div className="listing-form-first-row">
            <label>Product Title
              <input
                type="text"
                className="listing-form-text listing-form-title"
                maxLength="50"
                value={this.state.title}
                onChange={this.update.bind(this, "title")}
              />
            </label>

            <label>Price
              $<input
                type="number"
                className="listing-form-text listing-form-short"
                min="0.01"
                step="0.01"
                value={this.state.price}
                placeholder="0.00"
                onChange={this.update.bind(this, "price")}
              />
            </label>

            <label>Quantity in Stock
              <input
                type="number"
                className="listing-form-text listing-form-short"
                value={this.state.quantity}
                onChange={this.update.bind(this, "quantity")}
              />
            </label>
          </div>

          <label>140 Character Summary
            <input
              type="text"
              className="listing-form-text"
              maxLength="140"
              value={this.state.subtitle}
              onChange={this.update.bind(this, "subtitle")}
            />
          </label>

          <label>Description
            <textarea
              className="listing-form-text"
              value={this.state.description}
              onChange={this.update.bind(this, "description")}
            />
          </label>

          <div className="photoAdd" onClick={this.openCloudinaryWidget}>
            <div className="photoAddInner">
              <i className="fa fa-camera" aria-hidden="true"></i>
              <p>Add a photo</p>
            </div>
          </div>

          <button className="button">Edit Listing</button>

        </form>
      </div>
    );
  }
}

export default ListingForm;
