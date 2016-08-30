import { Provider } from 'react-redux';
import React from 'react';
import AppRouter from './router';

const Root = ({ store }) => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default Root;
