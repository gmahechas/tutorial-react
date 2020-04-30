import React from 'react';

import Toolbar from './Toolbar';

import { ctxt } from './Context';

export class MyComponent extends React.Component {

  render() {
    return (
      <div>
        <ctxt.Provider value={{ theme: 'dark' }}>
          <Toolbar />
        </ctxt.Provider>
      </div>
    )
  }
}

export default MyComponent

