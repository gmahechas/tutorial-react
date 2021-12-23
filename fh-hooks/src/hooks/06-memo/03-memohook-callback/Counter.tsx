import { FC, memo } from 'react';

interface IProps {
    name: string;
    counter: number;
    increment: (num: number) => void;
    decrement: (num: number) => void;
    reset: () => void;
}
const Counter: FC<IProps> = memo(
    ({ name, counter, increment, decrement, reset }) => {
        console.log('render ', name);
        return (
            <>
                <div>Counter: {counter}</div>
                <button onClick={() => increment(5)}>Increment</button>
                <button onClick={() => decrement(10)}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </>
        );
    }
);

export default Counter;
