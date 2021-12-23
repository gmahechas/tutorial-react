import { useState } from 'react';
import Focus from './Focus';

const ExampleRef = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    return (
        <div>
            <h1>Example useRef</h1>
            {show && <Focus />}

            <button onClick={handleClick}>{show ? 'Hide' : 'Show'}</button>
        </div>
    );
};

export default ExampleRef;
