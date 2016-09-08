import React from 'react';
import { withRouter } from 'react-router';

class SellSplash extends React.Component {
  handleClick() {
    if (this.props.currentUser) {
      this.props.router.push("/shop/create");
    } else {
      this.props.openModal("/shop/create");
    }
  }

  render() {
    return (
      <div className="splash">
        <img src="http://res.cloudinary.com/dzikfml7y/image/upload/v1473284358/sell-on-techsy_pksvnt.jpg" />
        <button className="sell-button" onClick={this.handleClick.bind(this)}>Open your shop</button>
      </div>
    );
  }
}

export default withRouter(SellSplash);
