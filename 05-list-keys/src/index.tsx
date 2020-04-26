import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import App from './App'; */
import * as serviceWorker from './serviceWorker';

/* import NumberList from './NumberList/NumberList'; */
import Blog from './Blog/Blog';

/* const numbers = [1, 2, 3, 4, 5]; */

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <NumberList numbers={numbers} /> */}
    <Blog posts={posts} />,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
