import React from 'react';
import Select from 'react-select';

class ShopForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      country: "",
      currency: "",
      kind: "",
      image_url: "",
      user_id: this.props.currentUserId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openCloudinaryWidget = this.openCloudinaryWidget.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  update(field, e) {
    let newState = {};
    newState[field] = e.target.value;
    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createShop({ shop: this.state });
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
      this.props.receiveErrors([error]);
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
    const currencyOptions = [
        { value: 'USD', label: '$ United States Dollar' },
        { value: 'CAD', label: '$ Canadian Dollar' },
        { value: 'EUR', label: '€ Euro' },
        { value: 'GBP', label: '£ British Pound' },
        { value: 'JPY', label: '¥ Japanese Yen' },
        { value: 'AUD', label: '$ Australian Dollar' }
    ];

    const countryOptions = [
        { value: 'Australia', label: 'Australia' },
        { value: 'Canada', label: 'Canada' },
        { value: 'France', label: 'France' },
        { value: 'Germany', label: 'Germany' },
        { value: 'Greece', label: 'Greece' },
        { value: 'Ireland', label: 'Ireland' },
        { value: 'Italy', label: 'Italy' },
        { value: 'Japan', label: 'Japan' },
        { value: 'New Zealand', label: 'New Zealand' },
        { value: 'Portugal', label: 'Portugal' },
        { value: 'Russia', label: 'Russia' },
        { value: 'Spain', label: 'Spain' },
        { value: 'The Netherlands', label: 'The Netherlands' },
        { value: 'United Kingdom', label: 'United Kingdom' },
        { value: 'United States', label: 'United States' }
    ];

    const checked = value => {
      return this.state.kind === value ? "checked" : "";
    };

    return (
      <div className="shop-form-page">
        <h1>Open your own shop!</h1>

        <form onSubmit={this.handleSubmit} className="shop-form">
          {this.renderErrors()}

          <div className="shop-form-first-row">
            <label>Name
              <input
                type="text"
                className="shop-form-text shop-form-name"
                maxLength="50"
                value={this.state.name}
                onChange={this.update.bind(this, "name")}
              />
            </label>
          </div>

          <label>Short Description
            <input
              type="text"
              className="shop-form-text"
              maxLength="140"
              value={this.state.description}
              onChange={this.update.bind(this, "description")}
            />
          </label>

          <Select
            className="shop-form-country"
            value={this.state.country}
            options={countryOptions}
            onChange={this.update.bind(this, "country")}
          />

          <Select
            className="shop-form-currency"
            value={this.state.currency}
            options={currencyOptions}
            onChange={this.update.bind(this, "currency")}
          />

          <label>Which of these best describes you?
            <input
              type="radio"
              value="full time"
              name="kind"
              checked={checked("full time")}
              onChange={this.update.bind(this, "kind")} />
              Selling is my full-time job
            <input
              type="radio"
              value="part full time"
              name="kind"
              checked={checked("part full time")}
              onChange={this.update.bind(this, "kind")} />
              I sell part-time but hope to sell full-time
            <input
              type="radio"
              value="part time"
              name="kind"
              checked={checked("part time")}
              onChange={this.update.bind(this, "kind")} />
              I sell part-time and that’s how I like it
            <input
              type="radio"
              value="other"
              name="kind"
              checked={checked("other")}
              onChange={this.update.bind(this, "kind")} />
              Other
          </label>

          <div className="photoAdd" onClick={this.openCloudinaryWidget}>
            <div className="photoAddInner">
              <i className="fa fa-camera" aria-hidden="true"></i>
              <p>Add a logo</p>
            </div>
          </div>

          <button className="button">Create Shop</button>

        </form>
      </div>
    );
  }
}

export default ShopForm;
