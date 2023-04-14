import { useEffect, useState } from "react";

const Button = ({color, text}) => {
  
  let [counter, setCounter] = useState(0)
  
  useEffect(()=> {
    const local = localStorage.getItem('counter')
    if(local) {
      setCounter(parseInt(local) + 1)
    }
  },[])
  const onClick = () => {
   
    console.log(`clicked the button`);
    setCounter(counter + 1)
    localStorage.setItem('counter', counter)
 
}
  return (
    <div>
        <button onClick={onClick} className='btn' style={{background : color}}>{counter}</button>
    </div>
  )
}



export default Button