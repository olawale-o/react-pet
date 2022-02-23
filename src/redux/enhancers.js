import { applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunkMiddleWare from 'redux-thunk';
import logger from './logger';

const middlewares = [thunkMiddleWare];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
const middlewareEnhancers = applyMiddleware(...middlewares);

const composedEnhancers = process.env.NODE_ENV === 'development' ? composeWithDevTools(middlewareEnhancers) : compose(middlewareEnhancers);

export default composedEnhancers;
