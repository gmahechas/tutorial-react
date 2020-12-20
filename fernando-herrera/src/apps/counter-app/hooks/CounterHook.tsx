import { useCallback } from 'react';
import UseStateHook from '../../../hooks/UseStateHook';

const CounterHook = (factor: number = 1) => {
  const [state, setState] = UseStateHook<number>(1);

  const increment = useCallback(() => {
    setState((c) => c + factor);
  }, [setState, factor]);

  const decrement = useCallback(() => {
    setState((c) => c - factor);
  }, [setState, factor]);

  const reset = useCallback(() => {
    setState(0);
  }, [setState]);

  return { state, increment, decrement, reset };
};

export default CounterHook;