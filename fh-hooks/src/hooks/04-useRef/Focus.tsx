import { useRef } from 'react';

const Focus = () => {
    const ref = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        ref.current!.select();
    };
    return (
        <div>
            <h1>Focus</h1>
            <hr />
            <input ref={ref} type='text' placeholder='Name' />

            <button onClick={handleClick}>Focus</button>
        </div>
    );
};

export default Focus;
