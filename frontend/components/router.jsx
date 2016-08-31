import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Splash from './splash/splash';

const AppRouter = () => (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
    </Route>
  </Router>
);

export default AppRouter;
