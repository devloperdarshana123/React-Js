import  { useState } from 'react'

function useCounter(initialValue = 0) {
    const [count , setCount] = useState(initialValue)
    function Increement(){
        setCount(count + 1)
    }
    function Decrement (){
        setCount(count-1)
    }
   function Reset(){
    setCount(initialValue)
   }
  return { count , Increement , Decrement , Reset}
}

export default useCounter