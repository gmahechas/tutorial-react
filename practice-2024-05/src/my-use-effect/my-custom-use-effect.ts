import { useEffect, useState } from 'react';

const MYCustomUseEffect = (): [number, () => void] => {
	const [count, setCount] = useState(0);

	const increment = (): void => {
		setCount(count + 1);
	}

	useEffect(() => {
		document.title = `You clicked ${count} times`;
		return () => {
			console.log('Cleaning up');
		};
	}, [count]);

	return [count, increment];
}

export default MYCustomUseEffect