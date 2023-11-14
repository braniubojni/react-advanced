import { useState } from "react"
import classes from './counter.module.scss'

export const Counter = () => {
	const [count, setCount] = useState(0);
	return (
		<>
			<h1 className={classes.h1}>Counter {count}</h1>
			<button className={classes.button} onClick={() => setCount(p => p + 1)}>Increment</button>
		</>
	)
}

export default Counter