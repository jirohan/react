import React from 'react'
import { useState } from 'react';

const Counter = () => {
    const [number, setNumber] = useState(0);

    function handleClick(){
        setNumber(number => number + 1);
        setNumber(number => number + 1);
        console.log(setNumber)
    }
    function handleClick2(){
        setNumber(number => number - 1);
        setNumber(number => number - 1);
        console.log(setNumber)
    }
  return (
    <div>
        <h2>{number}</h2>
        <button onClick={handleClick2}>-</button>
        <button onClick={handleClick}>+</button>
    </div>
  )
}

export default Counter