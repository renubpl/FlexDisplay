import * as reducers from './reducers';
import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import logger from 'redux-logger';
const config = {
key: 'root',
storage,
};
export default createStore(
combineReducers(reducers),
persistCombineReducers(config, reducers),
applyMiddleware(logger)
);