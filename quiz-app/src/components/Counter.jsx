import React, { useState } from 'react'

export default function Counter() {
    const [count,setCount] = useState(0);
    function handleIncrease(){
        setCount(count + 1);
    }
    function handleDecrease(){
        setCount(count - 1);
    }
  return (
    <div>
        <h1>Counter : {count}</h1>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}
