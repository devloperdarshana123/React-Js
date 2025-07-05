import React, { useState } from 'react'

function ConditionalRendring() {
    const[isLoggedIn , setIsLoggedIn] = useState(false)
    const [status , setStatus] = useState(true)
  return (
    <>
    <h1>Conditional Rendring </h1>
    {isLoggedIn ? (
        <h3>Welcome ,  User!</h3>
    ) : (
        <h2>Please Login </h2>
    )}
    {status && (
        <h3>
            Show Data
        </h3>
    )}
    </>
  )
}

export default ConditionalRendring