import React, { useEffect, useState } from 'react'

function Navbar({ setdata }) {


    let [inp, setinp] = useState("")
    let [animal,setanimal]=useState("")

    async function Searchcard() {
    
        let search = await fetch(`https://www.freetestapi.com/api/v1/${animal}?search=${inp}`)
        let acutualserch = await search.json()
        setdata(acutualserch)
      
        setinp("")
    }




    return (
        <div className='search'>

             <img src="https://t3.ftcdn.net/jpg/02/43/96/76/360_F_243967630_VdAkxeeeYUlRCbBbSJGsxuRjgLtwMzxi.jpg" alt="" />
            <div className='input'>

              <label>Select Type</label>  
                <select name="" id="" onChange={(e)=>{
                    return setanimal(e.target.value)
                }}>
                     <option value="animals">Animals</option>
                    <option value="cats">Cats</option>
                    <option value="dogs">Dogs</option>
                    <option value="birds">Birds</option>
                    <option value="actors">Actors</option>
                    <option value="actresses">Actresses</option>
                    <option value="authors">Authors</option>
                    
                 
                </select>
                
                <input type="text" value={inp} name="" placeholder='Type name' id="" onChange={(e) => {
                    return setinp(e.target.value)
                }} />

                <button onClick={Searchcard} className='btnsearch'>Search</button>



            </div>
            

        </div>
    )
}

export default Navbar