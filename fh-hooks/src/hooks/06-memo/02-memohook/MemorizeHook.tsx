import { useMemo, useState } from 'react';
import Counter from './Counter';
import CounterHook from './CounterHook';

const MemorizeHook = () => {
    /* if I only send counter it works, but we're sending functions refs */
    const {
        counter: counter1,
        increment: increment1,
        decrement: decrement1,
        reset: reset1,
    } = CounterHook(1500);
    const [show, setShow] = useState(true);

    const heavyProcess = (length: number) => {
        for (let index = 0; index < length; index++) {
            console.log('heavy process');
        }
    };

    const heavyProcessMemo = useMemo(() => heavyProcess(counter1), [counter1]);
    return (
        <div>
            <h1>Memorize Hook</h1>
            <hr />
            <Counter
                counter={counter1}
                increment={increment1}
                decrement={decrement1}
                reset={reset1}
            />
            {heavyProcessMemo}
            <button onClick={() => setShow(!show)}>
                Show/hide {JSON.stringify(show)}
            </button>
        </div>
    );
};

export default MemorizeHook;
