import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [counter, SetCounter] = useState(1);
    const Increment = () => {
        SetCounter(counter + 1)
    }
  return (
    <div>
    <button onClick={Increment}>Increment</button>
    <h1>{counter}</h1>
    </div>
  )
}

export default Counter