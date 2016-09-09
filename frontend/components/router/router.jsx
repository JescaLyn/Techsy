import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../app';
import Splash from '../splash/splash';
import ListingDetailContainer from '../listings/listing_detail_container';
import ListingFormContainer from '../listing_form/listing_form_container';
import ShopFormContainer from '../shop_form/shop_form_container';
import CartContainer from '../cart/cart_container';
import ShopContainer from '../shop/shop_container';
import SellSplashContainer from '../splash/sell_splash_container';
import SearchResultsContainer from '../search_results/search_results_container';

class AppRouter extends React.Component {
  constructor(props) {
    super(props);

    this.routes = (
      <Route path="/" component={ App } >
        <IndexRoute
          component={ Splash }
          onEnter={this.requestListingsOnEnter.bind(this)}
          />
        <Route
          path="/listings/:id"
          component={ ListingDetailContainer }
          onEnter={this.requestListingOnEnter.bind(this)}
          />
        <Route
          path="/sell-on-techsy"
          component={ SellSplashContainer }
          />
        <Route
          path="/cart"
          component={ CartContainer }
          />
        <Route
          path="/shops/:id"
          component={ ShopContainer }
          onEnter={this.requestListingsForShop.bind(this)}
          />
        <Route
          path="/search-results"
          component={ SearchResultsContainer }
          />
        <Route
          path="/shop/create"
          component={ ShopFormContainer }
          />
        <Route
          path="/listing/create"
          component={ ListingFormContainer }
          />
      </Route>
    );
  }

  requestListingsOnEnter() {
    this.props.requestListings({});
  }

  requestListingOnEnter(nextState) {
    this.props.requestListing(nextState.params.id);
  }

  requestListingsForShop(nextState) {
    this.props.requestShop(nextState.params.id);
    this.props.requestListings({ shop_id: nextState.params.id });
  }

  render() {
    return (
      <Router history={ hashHistory }>
        {this.routes}
      </Router>
    );
  }
}

export default AppRouter;
