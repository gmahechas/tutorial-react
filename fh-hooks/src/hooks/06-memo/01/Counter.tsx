import { FC, memo } from 'react';

interface IProps {
    counter: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}
const Counter: FC<IProps> = memo(({ counter, increment, decrement, reset }) => {
    console.log('render');
    return (
        <>
            <div>Counter: {counter}</div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </>
    );
});

export default Counter;
