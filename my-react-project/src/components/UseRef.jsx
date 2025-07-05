import React  , {useState , useRef}  from 'react'

function UseRef() {
    const[name , setName] = useState("");
    const refElement = useRef('')
    const prevname = useRef(""); 
    console.log(refElement);
    function clearText() {
        setName("");
        refElement.current.focus(); // Focus the input field after clearing
    }
    const handleInput = (e)=> {
        prevname.current = name; // Store the previous name
        setName(e.target.value)
    }
  return (
    <>
    <div> Learn UseRef</div>
    <input ref={refElement} value = {name} onChange={handleInput}/>
    <button onClick={clearText}>Clear</button>
    <br />
    <p>Previeous name : {prevname.current}</p>
    </>
  )
}

export default UseRef