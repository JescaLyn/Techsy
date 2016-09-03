import React from 'react';

class ListingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      subtitle: "",
      description: "",
      price: "",
      quantity: "",
      image_url: "",
      shop_id: "1"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setTwoNumberDecimal = this.setTwoNumberDecimal.bind(this);
    this.openCloudinaryWidget = this.openCloudinaryWidget.bind(this);
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
    this.props.createListing({ listing: this.state });
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

  moveCaretAtEnd(e) {
    let tempValue = e.target.value;
    e.target.value = "";
    e.target.value = tempValue;
  }

  setTwoNumberDecimal(e) {
    let parsedValue;
    if (e.target.value > 0) {
      parsedValue = Math.round(e.target.value * 100) / 100;
    } else {
      parsedValue = "";
    }
    this.setState({ price: parsedValue });
    // this.moveCaretAtEnd(e);
  }

  handleImageUpload(error, result) {
    if (error) {
      this.props.receiveErrors([error]);
    } else {
      this.setState({ image_url: result.url });
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
        <h1>New Listing</h1>

        <form onSubmit={this.handleSubmit} className="listing-form">
          {this.renderErrors()}

          <div className="listing-form-first-row">
            <label>Product Title:
              <input
                type="text"
                className="listing-form-text listing-form-title"
                maxLength="50"
                value={this.state.title}
                onChange={this.update.bind(this, "title")}
              />
            </label>

            <label>Price:
              $<input
                type="number"
                className="listing-form-text listing-form-short"
                min="0.01"
                step="0.01"
                value={this.state.price}
                placeholder="0.00"
                onChange={this.setTwoNumberDecimal}
              />
            </label>

            <label>Quantity in Stock:
              <input
                type="number"
                className="listing-form-text listing-form-short"
                value={this.state.quantity}
                onChange={this.update.bind(this, "quantity")}
              />
            </label>
          </div>

          <label>140 Character Summary:
            <input
              type="text"
              className="listing-form-text"
              maxLength="140"
              value={this.state.subtitle}
              onChange={this.update.bind(this, "subtitle")}
            />
          </label>

          <label>Description:
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

          <button className="button">Create Listing</button>

        </form>
      </div>
    );
  }
}

export default ListingForm;
