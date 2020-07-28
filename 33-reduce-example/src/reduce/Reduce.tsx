import React, { useReducer } from 'react'

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD':
      return state + action.payload;
    case 'SUB':
      return state - action.payload;
    case 'RES':
      return state = 0;
    default:
      return state;
  }
};

function Reduce() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      {count}
      <button onClick={() => dispatch({ type: 'ADD', payload: 2 })}>+</button>
      <button onClick={() => dispatch({ type: 'SUB', payload: 2 })}>-</button>
      <button onClick={() => dispatch({ type: 'RES' })}>reset</button>
    </div>
  )
}

export default Reduce;
