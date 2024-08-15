import React, { useEffect, useState } from "react"

function Posts() {
    const [data, setData]= useState([]);
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(Response => Response.json())
        .then(data => setData(data))
        .catch(error => console.error(error))
    }, [data])
    console.log(data);
  return (
    <div>
        <h1>using fetch data </h1>
        <div>
            <ul>
                {data.map((item, index)=> (
                    <li key={index}> {item.title}- <br />{item.body}</li>
                ))}
            </ul>
            
        </div>
      
    </div>
  )
}

export default Posts
