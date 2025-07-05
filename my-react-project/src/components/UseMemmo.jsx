import React, { useMemo, useState } from 'react'

function UseMemmo() {
    const[count , setCount] = useState(0)
    const[number , setNumber] = useState(50000000000)
    function IncreaseCount(){
      if (count == 10){
        setCount(999999999999999);
      }
        setCount(count+1);
    }
    // function Calculate(){
    //     let sum = 0;
    //     for(let i = 1; i<=number ; i++){
    //         sum = sum + i
    //     }
    //     return sum;
    // }

     const Calculate = useMemo(() =>{
      let sum  = 0;
      for(let i = 0;i<=number; i++){
        sum += i;
      }
      return sum;

    } , [number])
    console.log(`Sum Of The Number from 1 to ${number}` , Calculate);
  return (
    
    <>
    <div>UseMemmo</div>
    <h1>Count:{count}</h1>
    <button onClick={IncreaseCount}>Increase Count </button>
    </>
  )
}

export default UseMemmo