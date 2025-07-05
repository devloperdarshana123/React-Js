import React from 'react'
import '../assets/CSS/style.css' // Importing external CSS file

function InlineCSS() {
    const style = {
        container: {
            backgroundColor: 'red',
            height : '100px',
            width: '100px',
        },
        h2Text:{
            fontSize: '24px',
            color: 'blue',
        }
    }
  return (
    <>
    <style>
        {`
         .container{
            background-color: green;
            height: 100px;
            width: 100px;
         }`}
    </style>
    <h1>Inline CSS</h1>
    <p style={{fontSize:'48px' , fontWeight:600 , color:'red'}}>This is a paragraph tag</p>
    <div style={style.container}>

    </div>
    <h2 style={style.h2Text}>Test h2Element </h2>
    <hr />
    <h1>Internal CSS</h1>
    <div className='container'></div>
    <hr />
    <h1>External CSS</h1>
    <div className='Yellowbox'></div>
    <h2 className='Yellowtext'>Yellow Text </h2>
    </>
  )
}

export default InlineCSS