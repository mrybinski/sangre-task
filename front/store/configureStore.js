import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer, { defaultState } from './reducers';

export default function configureStore() {
  return createStore(
    rootReducer,
    defaultState,
    compose(
      applyMiddleware(thunkMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
  );
}
