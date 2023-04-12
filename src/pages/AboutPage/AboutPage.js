import React, { useEffect, useRef, useState} from 'react'
import { useLocation } from 'react-router-dom'
const AboutPage = () => {
  const location = useLocation();

    const [ text, setText ] = useState(1);
  const inputRef =  useRef(null)  

const handleChange = () => {
  inputRef.current = inputRef.current += 1
} 
const getValue = () => {
  setText(inputRef.current.value)
}

  console.log(inputRef, 'ref');
  return (
    <div>
      {text}
    <input 
    ref={inputRef} 
    onChange={handleChange}
    type="text" />
    
    <button onClick={getValue}>Get</button>
    </div>
  )
}

export default AboutPage