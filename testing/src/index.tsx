import React from 'react';
import ReactDOM from 'react-dom';

import StoreHoc from './utils/hoc/StoreHoc';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <StoreHoc>
      <App />
    </StoreHoc>
  </React.StrictMode>,
  document.getElementById('root')
);
