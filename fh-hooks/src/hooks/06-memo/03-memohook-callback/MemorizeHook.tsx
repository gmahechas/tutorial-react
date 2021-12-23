import { useEffect, useState } from 'react';
import Counter from './Counter';
import CounterHook from './CounterHook';

const MemorizeHookCallback = () => {
    /* if I only send counter it works, but we're sending functions refs */
    const [show, setShow] = useState(true);
    const {
        counter: counter1,
        increment: increment1,
        decrement: decrement1,
        reset: reset1,
    } = CounterHook(1500);

    const {
        counter: counter2,
        increment: increment2,
        decrement: decrement2,
        reset: reset2,
    } = CounterHook(1500);

    /*
    useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [increment2]) --> good practice
    */
    return (
        <div>
            <h1>Memorize Call back</h1>
            <hr />
            <Counter
                name='Counter 1'
                counter={counter1}
                increment={increment1}
                decrement={decrement1}
                reset={reset1}
            />
            <Counter
                name='Counter 2'
                counter={counter2}
                increment={increment2}
                decrement={decrement2}
                reset={reset2}
            />
            <button onClick={() => setShow(!show)}>
                Show/hide {JSON.stringify(show)}
            </button>
        </div>
    );
};

export default MemorizeHookCallback;
