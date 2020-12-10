import React from 'react';

import FragmentShared from './hoc/FragmentShared';
import Counter from './components/Counter';
import InputShared from './hoc/InputShared';
import ButtonShared from './hoc/ButtonShared';
import UseStateHook from './hooks/UseStateHook';

const CounterApp = () => {
  const [counter, setCounter] = UseStateHook<number>(1);
  const [numberRef, setNumberRef] = UseStateHook<number>(3);

  const increment = () => setCounter(counter + numberRef);
  const decrement = () => setCounter(counter - numberRef);
  const changeNumber = (e: React.ChangeEvent<HTMLInputElement>) =>
    e.target.value
      ? setNumberRef(parseInt(e.target.value))
      : setNumberRef(0);

  return (
    <FragmentShared>
      <Counter counter={counter} />
      <InputShared value={numberRef} onChange={changeNumber} />
      <ButtonShared onClick={increment}>Increment</ButtonShared>
      <ButtonShared onClick={decrement}>Decrement</ButtonShared>
    </FragmentShared>
  );
};

export default CounterApp;
