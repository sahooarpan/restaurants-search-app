
import { createStore,applyMiddleware } from 'redux';



import rootReducer from './reducers/index';

import logger from 'redux-logger'

import thunk from 'redux-thunk'

const middlewares = [thunk];

middlewares.push(logger);


 const store = createStore(rootReducer,applyMiddleware(...middlewares));



export default store;