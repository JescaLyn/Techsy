import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../app';
import Splash from '../splash/splash';

class AppRouter extends React.Component {

  requestListingsOnEnter() {
    this.props.requestListings();
  }

  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute
            component={ Splash }
            onEnter={this.requestListingsOnEnter.bind(this)}
          />
        </Route>
      </Router>
    );
  }
}

export default AppRouter;
