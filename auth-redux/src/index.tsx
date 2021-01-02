import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './components/store/reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/App';
import Welcome from './components/Welcome';
import Sigup from './components/auth/Sigup';

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path='/'exact component={Welcome} />
        <Route path='/signup' component={Sigup} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
