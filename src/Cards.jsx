import React from 'react'

function Cards({description,img,name,place_of_found,species,origin,temperament,birth_year,nationality,biography}) {
  return (
    <div className='card'>
        <img src={img} alt="" />
        <h1>{name}</h1>
        <p>{description||biography}</p>
        {birth_year?<p>Birth_year : {birth_year}</p>:null}
        <p>place : {place_of_found||origin||nationality}</p>
        <h3>{species?species:temperament}</h3>
        
    </div>
  )
}

export default Cards