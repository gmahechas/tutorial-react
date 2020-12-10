import React from 'react';

import FragmentShared from '../hoc/FragmentShared';
import InputShared from '../hoc/InputShared';
import ButtonShared from '../hoc/ButtonShared';

import Counter from './components/Counter';
import CounterHook from './hooks/CounterHook';
import InputHook from './hooks/InputHook';

const CounterApp = () => {
  const { state: factor, changeFactor } = InputHook();
  const { state: counter, increment, decrement, reset } = CounterHook(factor);

  return (
    <FragmentShared>
      <Counter counter={counter} />
      <InputShared name="factor" value={factor} onChange={changeFactor} />
      <ButtonShared onClick={increment}>Increment</ButtonShared>
      <ButtonShared onClick={decrement}>Decrement</ButtonShared>
      <ButtonShared onClick={reset}>Reset</ButtonShared>
    </FragmentShared>
  );
};

export default CounterApp;
