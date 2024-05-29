import { useMemo, useState } from 'react';
import AnotherExpensiveComponent from './AnotherExpensiveComponent';
import ExpensiveComponent from './ExpensiveComponent';

const MyUseMemoTwo = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  const memoizedExpensiveComponent = useMemo(() => {
    return <ExpensiveComponent value={count} />;
  }, [count]);

  const memoizedAnotherExpensiveComponent = useMemo(() => {
    return <AnotherExpensiveComponent value={otherCount} />;
  }, [otherCount]);

/* 	const memoizedExpensiveComponent = <ExpensiveComponent value={count} />;
  const memoizedAnotherExpensiveComponent = <AnotherExpensiveComponent value={otherCount} />; */

  return (
    <>
      <h2>Parent Component</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOtherCount(otherCount + 1)}>
        Increment Other Count
      </button>
      <p>Count: {count}</p>
      <p>Other Count: {otherCount}</p>
      {memoizedExpensiveComponent}
      {memoizedAnotherExpensiveComponent}
    </>
  );
};

export default MyUseMemoTwo;
