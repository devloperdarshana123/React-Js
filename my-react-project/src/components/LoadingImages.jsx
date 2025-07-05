import React from 'react'
import CoverImage from '../assets/images/restaarant.jpg'
import Cover from '../assets/images/wp3108378.jpg'

function LoadingImages() {
  return (
   
    <>
     
     <h1>Load Images</h1>
     <img src={CoverImage} alt="Restaurant Cover"  width={500}/>
     <img src={Cover} alt=" Cover" width={500} />
    </>
  )
}

export default LoadingImages