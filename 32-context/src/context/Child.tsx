import React, { useContext } from 'react'

import { Store } from './Context';

function Child() {
  const context = useContext(Store);
  return <div>{context.text}</div>
}

export default Child
