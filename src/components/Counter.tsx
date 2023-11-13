import { useState } from "react"
import './counter.scss'

export const Counter = () => {
	const [count, setCount] = useState(0);
	return (
		<>
			<h1>Counter {count}</h1>
			<button onClick={() => setCount(p => p + 1)}>Increment</button>
		</>
	)
}

export default Counter