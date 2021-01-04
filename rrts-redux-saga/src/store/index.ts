import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './reducers';
import rootEffects from './effects'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootEffects);

export default store;