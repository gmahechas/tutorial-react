import { useState } from 'react';

const UseStateHook = function <T>(initialState: T) {
  const state = useState(initialState);
  return state;
};

export default UseStateHook
