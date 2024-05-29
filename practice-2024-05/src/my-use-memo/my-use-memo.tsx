import { useMemo, useState } from 'react';

const MyUseMemo = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  const expensiveCalculation = (num: number): number => {
    console.log('Calculating...');
    for (let i = 0; i < 1000; i++) {
      num += 1;
    }
    return num;
  };

  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);
  // const memoizedValue = expensiveCalculation(count);

  return (
    <>
      <div>
        <h2>Expensive Calculation</h2>
        <p>Count: {count}</p>
        <p>Calculated Value: {memoizedValue}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
      </div>
      <div>
        <h2>Other Counter</h2>
        <p>Other Count: {otherCount}</p>
        <button onClick={() => setOtherCount(otherCount + 1)}>
          Increment Other Count
        </button>
      </div>
    </>
  );
};

export default MyUseMemo;
