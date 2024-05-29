import { FC } from 'react'
import MyCustomCountHook from './my-custom-use-state'

interface Props {}

const MyUseState: FC<Props> = () => {
	const [count, increment] = MyCustomCountHook()

	return (
		<>
			<div>the count is: {count}</div>
			<button onClick={increment}>+</button>
		</>
	)
}

export default MyUseState