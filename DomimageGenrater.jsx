import axios from 'axios';
import React, { useEffect, useState } from 'react'


function DomimageGenrater() {
    const [data, setData] = useState([]);
    useEffect(()=> {
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then(Response => {
            setData(Response.data.message)
        })
    }, [])
    console.log(data);





    return (
        <div>
            <h1>dog Image Genrater</h1>
            <div>
                <img src={data} alt="" />
            </div>
           

        </div>
    )
}

export default DomimageGenrater
