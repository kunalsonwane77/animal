import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import Navbar from './Navbar';

function App() {


  let [data,setdata]=useState([])

  async function myapi(){
    let data = await fetch("https://www.freetestapi.com/api/v1/animals")

    let actualdata = await data.json()

    console.log(actualdata)
    setdata(actualdata)
}


useEffect(()=>{
  myapi()
},[])


  return (
    <div className="App">
      <Navbar setdata={setdata}/>
      <div className="cardscontainer">
      {data.map(({description,image,habitat,name,place_of_found,species,id})=>{
        return <Cards description={description} key={id} img={image} habitat={habitat} name={name} place_of_found={place_of_found} species={species}/>
      })}

   </div>

      
          
    </div>
  );
}

export default App;
