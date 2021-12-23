import { useState } from 'react';
import Counter from './Counter';
import CounterHook from './CounterHook';

const Memorize = () => {
    /* if I only send counter it works, but we're sending functions refs */
    const {
        counter: counter1,
        increment: increment1,
        decrement: decrement1,
        reset: reset1,
    } = CounterHook(0);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Memorize</h1>
            <hr />
            <Counter
                counter={counter1}
                increment={increment1}
                decrement={decrement1}
                reset={reset1}
            />

            <button onClick={() => setShow(!show)}>
                Show/hide {JSON.stringify(show)}
            </button>
        </div>
    );
};

export default Memorize;
