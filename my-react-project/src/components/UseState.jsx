import { useState } from "react"

function UseState() {
    const [num , setNum] = useState(5)
    console.log(num)
    function handleNum(){
        setNum (num+5)
    }
    const [stockPrice , setStockPrice ] = useState({stock:'Apple' , price:100})
    console.log(stockPrice);
    const updateStockPrice =()=>{
setStockPrice({...setStockPrice , price:2000})
    }
  return (
    <>
    <h2>Number:{num}</h2>
    <button onClick={handleNum}> Click Button </button>
    <hr />
    <h2>{stockPrice.stock} : {stockPrice.price}</h2>
    <button onClick={updateStockPrice}>Click Stock Price </button>
    </>
  )
}

export default UseState