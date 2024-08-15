import React, { useEffect, useState } from 'react'


function Randombackround() {
    const[color, setColor]= useState('#ffffff');
    const [count, setCount]= useState(0);
    useEffect(()=>{
        if(count <50){
            setTimeout(() => {
                setCount(count+1)
                
            }, 2000);
        }
    }, [count])
    useEffect(()=>{
        document.body.style.backgroundColor=color
       
    },  [color])

    function getrandomcolor(){
        const letters= "0123456789ABCDEF";
        let randomcolor= "#";
        for (let i = 1; i <=6; i++) {
            randomcolor+= letters[Math.floor(Math.random()*15)];

        }
        console.log(randomcolor);
        return randomcolor;

    }
  return (
    <div>
        <h3> WATCH THE WEBSITE PAGE {count}</h3>
        <h2>random backround color picker</h2>
        <button onClick={()=>setColor(getrandomcolor()) }>change the color</button>
      
    </div>
  )
}

export default Randombackround
