import React, { useState } from 'react';
import CounterHook from '../counter-app/hooks/CounterHook';
import Small from './Small';

const Memorize = () => {
  const { state: counter, increment } = CounterHook(1);
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>
        Counter <Small value={counter} />
      </h1>
      <hr />
      <button onClick={increment}>Incrementar</button>
      <button onClick={() => setShow(!show)}>
        Show/hide {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default Memorize;
