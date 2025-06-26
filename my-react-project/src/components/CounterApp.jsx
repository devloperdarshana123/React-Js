import React, { useState } from 'react'

function CounterApp() {
    const[count , setCount] = useState(0)
    function IncreaseCounter(){
     setCount(count+5)
    }
    function DecreaseCount(count){
        setCount(count-5)
    }
    function Reset(){
        setCount(0)
    }
  return (
    <>
    <h1>CounterApp</h1>
    <h2>Count: {count}</h2>
    <button onClick={IncreaseCounter}>Increase Count</button>
    <button onClick={DecreaseCount}>Decrerase Count</button>
    <button onClick={Reset}>Reset Count </button>
    </>
  )
}

export default CounterApp