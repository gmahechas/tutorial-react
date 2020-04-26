import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import App from './App'; */
import * as serviceWorker from './serviceWorker';

/* import NameForm from './NameForm/NameForm'; */
/* import EssayForm from './EssayForm/EssayForm'; */
/* import FlavorForm from './FlavorForm/FlavorForm'; */
import Reservation from './Reservation/Reservation';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <NameForm /> */}
    {/* <EssayForm /> */}
    {/* <FlavorForm /> */}
    <Reservation />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
