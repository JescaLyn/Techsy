import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../app';
import Splash from '../splash/splash';
import ListingDetailContainer from '../listings/listing_detail_container';
import ListingFormContainer from '../listing_form/listing_form_container';

class AppRouter extends React.Component {

  requestListingsOnEnter() {
    this.props.requestListings();
  }

  requestListingOnEnter(nextState) {
    this.props.requestListing(nextState.params.id);
  }

  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
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
            component={ ListingFormContainer }
          />
        </Route>
      </Router>
    );
  }
}

export default AppRouter;
