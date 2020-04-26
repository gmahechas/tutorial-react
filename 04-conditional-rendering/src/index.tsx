import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import App from './App'; */
import * as serviceWorker from './serviceWorker';

/* import Conditional from './Conditional/Conditional'; */
/* import LoginControl from './LoginControl/LoginControl'; */
/* import Mailbox from './Mailbox/Mailbox'; */
import Page from './Page/Page';

/* const messages = ['React', 'Re: React', 'Re:Re: React']; */

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Conditional /> */}
    {/* <LoginControl /> */}
    {/* <Mailbox unreadMessages={messages} /> */}
    <Page />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
