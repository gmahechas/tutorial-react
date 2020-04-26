import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import App from './App'; */
import * as serviceWorker from './serviceWorker';

import Toggle from './Toogle/Toogle';
import ButtonArgs from './ButtonArgs/ButtonArgs';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Toggle />
    <ButtonArgs />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
