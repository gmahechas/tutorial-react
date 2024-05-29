import { useState } from 'react';

const MyCustomCountHook = (defaultCount = 7): [number, () => void] => {

	const [count, setCount] = useState(defaultCount);

	const increment = (): void => {
		setCount(count + 1);
	}

	return [count, increment];
}

export default MyCustomCountHook