import rootReducer from '../reducers/root_reducer';
import { createStore, applyMiddleware } from 'redux';
import { thunk } from '../middleware/thunk';

const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(thunk));
};

export default configureStore;
