import React, { useEffect, useState } from 'react'

function Theme() {
  const[darkmode, setDarkmode]= useState(false);
  useEffect(()=> {
    document.body.style.backgroundColor = darkmode ? "#fff": "#000"
    document.body.style.color = darkmode ? "#000": "#fff"

    
  }, [darkmode])
  return (
    <div>
      <h1>{darkmode ? "dark mode": "light mode"}</h1>
      <button onClick={()=> setDarkmode(!darkmode)}>change the theme</button>
      
    </div>
  )
}

export default Theme

