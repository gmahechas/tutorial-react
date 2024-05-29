import { useCallback, useState } from 'react';
import Button from './button';

const MyUseCallback = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

/*   const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const incrementOtherCount = () => {
    setOtherCount((prevCount) => prevCount + 1);
  }; */

	const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const incrementOtherCount = useCallback(() => {
    setOtherCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <>
      <h2>Parent Component</h2>
      <p>Count: {count}</p>
      <Button onClick={incrementCount} label='Increment Count' />
      <p>Other Count: {otherCount}</p>
      <Button onClick={incrementOtherCount} label='Increment Other Count' />
    </>
  );
};

export default MyUseCallback;
