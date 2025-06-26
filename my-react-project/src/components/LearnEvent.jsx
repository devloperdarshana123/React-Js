import React from 'react'

function LearnEvent() {
    function handleClick() {
        console.log("Button Clicked");
    }
    function handleClickAgain(message) {
        console.log(message);
    }
  return (
    <>
    <button onClick={handleClick}> Click Here</button>
    <br />
    <button onClick={() => handleClickAgain("Clicked Again")}> Click Again </button>
    </>
    
  )
}

export default LearnEvent