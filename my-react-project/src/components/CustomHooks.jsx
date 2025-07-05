import React from 'react'
import useCounter from '../hooks/useCounter'

function CustomHooks() {
    const {count , Increement , Decrement , Reset} = useCounter(5)
  return (
    <>
    <h1>CustomHooks</h1>
    <h2>Count : {count}</h2>
    <button onClick={Increement}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
    <button onClick={Reset}>Reset</button>
    </>
  )
}

export default CustomHooks