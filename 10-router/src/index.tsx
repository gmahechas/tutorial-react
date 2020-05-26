import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import App from './App'; */
import * as serviceWorker from './serviceWorker';

import Basic from './BasicRouting/Basic';
/* import Nested from './NestedRouting/Nested'; */
/* import Lazy from './Lazy/Lazy'; */
/* import UrlParameters from './UrlParameters/UrlParameters'; */
/* import AppRouter from './AppRouter/AppRouter'; */

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Basic />
    {/* <Nested /> */}
    {/* <Lazy /> */}
    {/* <UrlParameters /> */}
    {/* <AppRouter /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
