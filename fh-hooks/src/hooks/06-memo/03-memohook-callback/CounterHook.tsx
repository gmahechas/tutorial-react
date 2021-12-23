import { useCallback, useState } from 'react';

const CounterHook = (initial: number) => {
    const [counter, setCounter] = useState(initial);

    const increment = useCallback(
        (num) => {
            setCounter((c) => c + num);
        },
        [setCounter]
    );

    const decrement = useCallback(
        (num) => {
            setCounter((c) => c - num);
        },
        [setCounter]
    );

    const reset = useCallback(() => {
        setCounter(0);
    }, [setCounter]);

    return {
        counter,
        increment,
        decrement,
        reset,
    };
};

export default CounterHook;
