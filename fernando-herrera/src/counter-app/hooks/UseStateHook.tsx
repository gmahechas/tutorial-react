import { useState } from 'react';

function UseStateHook<T>(initialState: T) {
  const state = useState(initialState);
  return state;
};

export default UseStateHook
