```js

<label className="radio-buttons">
  <input
    type="radio"
    className="radio"
    name="gender"
    value="female"
    checked={checked("female")}
    onChange={this.updateGender.bind(this)}
  /> Female
  <input
    type="radio"
    className="radio"
    name="gender"
    value="male"
    checked={checked("male")}
    onChange={this.updateGender.bind(this)}
  /> Male
  <input
    type="radio"
    className="radio"
    name="gender"
    value="other"
    checked={checked("other")}
    onChange={this.updateGender.bind(this)}
  /> Other
</label>





<input
  type="text"
  placeholder="Search for items"
  className="search-input text"
  onChange={this.updateSearchFilter}
/>





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





import React from 'react';
import { withRouter } from 'react-router';
import Modal from 'react-modal';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search_filter: "",
      modalOpen: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateSearchFilter = this.updateSearchFilter.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveSearchQuery(this.state.search_filter);
    this.props.requestListings(this.state);
    this.props.router.push("/search-results");
  }

  updateSearchFilter(e) {
    this.setState({ search_filter: e.target.value });
    if (e.target.value !== "") {
      this.setState({ modalOpen: true });
    } else {
      this.closeModal();
    }
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  render() {
    return(
      <form className="search-bar" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Search for items"
          className="search-input text"
          onChange={this.updateSearchFilter}
        />

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          className="search-modal"
          overlayClassName="none" >
          <div>Hi</div>
        </Modal>

        <button className="search-button">
          Search
        </button>
      </form>
    );
  }
}

export default withRouter(SearchBar);



<Modal
  isOpen={this.state.modalOpen}
  onRequestClose={this.closeModal}
  className="search-modal"
  overlayClassName="none" >
  <div>Hi</div>
</Modal>
```

```css
.shop-owner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 12em;
  box-sizing: border-box;
}

.shop-owner img {
  width: 5em;
}

.shop-owner p {
  font-size: 11px;
  color: var(--grayed-text);
  margin-bottom: 1rem;
}

.shop-owner a {
  margin-top: 1em;
  font-size: 14px;
  color: var(--blue-link);
}

.shop-owner a:hover {
  text-decoration: underline;
}

```
