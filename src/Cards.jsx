import React from 'react'

function Cards({description,img,habitat,name,place_of_found,species}) {
  return (
    <div className='card'>
        <img src={img} alt="" />
        <h1>{name}</h1>
        <p>{description}</p>
        <p>habitat : {habitat}</p>
        <p>place_of_found : {place_of_found}</p>
        <h3>{species}</h3>
        
    </div>
  )
}

export default Cards