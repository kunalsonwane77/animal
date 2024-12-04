import React, { useEffect, useState } from 'react'

function Navbar({ setdata }) {


    let [inp, setinp] = useState("")


    async function searchcard() {

        setinp("")


        

        let search = await fetch(`https://www.freetestapi.com/api/v1/animals?search=${inp}`)
        let acutualserch = await search.json()

         setdata(acutualserch)
       

    }




    return (
        <div className='search'>
            <div className='input'>
                <input type="text" value={inp} name="" placeholder='Type animal name' id="" onChange={(e) => {
                    return setinp(e.target.value)
                }} />

                <button onClick={searchcard}>search</button>

            </div>

        </div>
    )
}

export default Navbar