import React, { useEffect, useState } from 'react'

function Nasakey() {
    const[nasadata, setNasadata]= useState([]);

    function getdata(){
        fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5')
        .then(Response => Response.json())
        .then(data => setNasadata(data))
        .catch(error => console.error(error))
    }
    console.log(nasadata);

  return (
    <div>
        <h2> NASA image of tha day </h2>

        <button onClick={getdata}>fetch data</button>

        <div>
            <ul>
                {nasadata.map((data)=> (
                    <li>{data.explanation}
                    <img src={data.url} alt="" />
                    {data.date}
                    </li>
                ))}
              
            </ul>
        </div>
    
       

      
    </div>
  )
}


export default Nasakey
