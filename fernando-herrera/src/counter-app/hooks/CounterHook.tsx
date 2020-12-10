import UseStateHook from '../../hooks/UseStateHook';

const CounterHook = (factor: number = 1) => {
  const [state, setState] = UseStateHook<number>(1);
  const increment = () => setState(state + factor);
  const decrement = () => setState(state - factor);
  const reset = () => setState(0);
  return { state, increment, decrement, reset };
};

export default CounterHook
