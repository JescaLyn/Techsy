import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import ListingsMiddleware from './listings_middleware';
import ShopsMiddleware from './shops_middleware';
import CartMiddleware from './cart_middleware';
import SearchMiddleware from './search_middleware';

export default applyMiddleware(
  SessionMiddleware,
  ListingsMiddleware,
  ShopsMiddleware,
  CartMiddleware,
  SearchMiddleware
);
