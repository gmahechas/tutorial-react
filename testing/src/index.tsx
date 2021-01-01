import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import StoreHoc from './utils/hoc/StoreHoc';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <StoreHoc>
      <BrowserRouter>
        <Route path='/' component={App} />
      </BrowserRouter>
    </StoreHoc>
  </React.StrictMode>,
  document.getElementById('root')
);
