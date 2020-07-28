import React, { createContext } from 'react';

import Parent from './Parent';
import Child from './Child';

export const Store = createContext({ text: 'initial text'});

export function Context() {
  return (
    <div>
      <Parent>
        <Child />
      </Parent>
    </div>
  )
}

