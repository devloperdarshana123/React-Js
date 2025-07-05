import { useEffect } from 'react'
import {useState} from 'react'

function UseEffect() {
    const[count , setCount] = useState(0)
    const [random , setRandom] = useState(0)
    function IncreaseCount (){
        setCount(count+1)
    }
    function GenerateNumber(){
        const randomnum = Math.floor(Math.random()*100)
        setRandom(randomnum)
    }

    useEffect (()=>{
     console.log('UseEffect is Called ')
     return()=>{
     console.log('Cleanup Function is Called ');
     }

    }, [count , random])
  return (
    <>
    <h1>Count:{count}</h1>
    <button onClick={IncreaseCount}>Increase Count </button>
    <hr/>
    <h1>Random Number:{random}</h1>
    <button onClick={GenerateNumber}>Generate NUmber</button>
    </>
    
  )
}

export default UseEffect