import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as CartActions from './actions/cart_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (window.currentUser) {
    const initialState = {
      session: { currentUser: window.currentUser },
      cart: window.currentUser.cart
    };
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }
  window.store = store;
  window.CartActions = CartActions;
  ReactDOM.render(<Root store={store} />, document.getElementById("root"));
});
