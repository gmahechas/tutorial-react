import React, { useMemo, useState } from 'react';
import CounterHook from '../counter-app/hooks/CounterHook';

const UseMemoApp = () => {
  const { state: counter, increment } = CounterHook(10);
  const [show, setShow] = useState(true);

  const heavyProcess = (i: number) => {
    for (let index = 0; index < i; index++) {
      console.log('here we go...');
    }
    return `${i} done`;
  };

  const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);

  return (
    <div>
      <h1>
        Counter <small>{counter}</small>
      </h1>
      <hr />
      <p>{memoHeavyProcess}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={() => setShow(!show)}>
        Show/hide {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default UseMemoApp;
