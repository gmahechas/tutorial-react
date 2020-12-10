import React, { useCallback, useState } from 'react';
import ButtonShared2 from './ButtonShared2';

const CallBall = () => {
  const [counter, setCounter] = useState(1);

  /*   const increment = () => {
    setCounter(counter + 1)
  }; */

  const increment = useCallback(() => {
    setCounter(c => c + 1);
  }, [setCounter]);

  return (
    <div>
      <h1>Callbak {counter}</h1>
      <hr />
      <ButtonShared2 increment={increment}>Increment</ButtonShared2>
    </div>
  );
};

export default CallBall;
