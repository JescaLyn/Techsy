import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { requestListings } from './actions/listing_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const initialState = { session: { currentUser: window.currentUser } };
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }
  window.store = store;
  window.requestListings = requestListings;
  ReactDOM.render(<Root store={store} />, document.getElementById("root"));
});
