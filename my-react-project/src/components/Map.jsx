import React from 'react'

function Map() {
    const names = ["Darshana" , "Mehra" , "React" , "JSX" , "JavaScript"]
  return (
   
    <>
     <div>Map Function </div>
     
     <ul>
        {names.map((name , index) => (
            <li key={index}>{name}</li>
        ))}
     </ul>
    </>
  )
}

export default Map