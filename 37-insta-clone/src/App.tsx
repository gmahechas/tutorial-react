import React, { useState } from 'react';

import { connect } from 'react-redux';

import { increment, deincrement, reset } from './reducers';
import './App.css';

function App(props: any) {
  const [value, setValue] = useState(props.state);
  const { state, increment, deincrement, reset } = props;

  const handleChange = (e: any) => {
    const value = e.target.value;
    setValue(Number(value));
  }

  const handleReset = () => {
    reset(value);
  }
  return (
    <div className="App">
      <p>{state}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={deincrement}>Decrement</button>
      <input type="text" onChange={(e) => handleChange(e)} />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  increment: () => dispatch(increment()),
  deincrement: () => dispatch(deincrement()),
  reset: (payload: number) => dispatch(reset(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
