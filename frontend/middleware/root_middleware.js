import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import ListingsMiddleware from './listings_middleware';

export default applyMiddleware(
  SessionMiddleware,
  ListingsMiddleware
);
