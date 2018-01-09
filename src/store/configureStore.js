import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import api from './../api/api';
import weatherReducer from './../reducers/weather';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => createStore(
  combineReducers({
    weather: weatherReducer
  }),
  composeEnhancer(applyMiddleware(reduxThunk.withExtraArgument(api)))
);
