import React, { useEffect, useState } from 'react'

const Usefetch = (url) => {
    const [data, setData]= useState(null);
    const [loading, setLoading]= useState(true);
    const [error, setError]= useState(false);

    useEffect(()=> {
        const fetchdata =  async()=> {
            try {
                const response = await fetch(url);
                if(!response.ok){
                    throw new error ('data was not fetch properly');
                }

                const result = await response.json();
                setData(result);
                
            } catch (error) {
                setError(error);
                
            }
            finally{
                setLoading(false);
            }

        }
    }, [url])

  return {loading, data, error}
    
}

export default Usefetch
