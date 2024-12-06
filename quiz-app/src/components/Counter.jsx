import React, { useState } from 'react'

export default function Counter() {
    const [count,setCount] = useState(0);
    const [count1,setCount1] = useState(0);
    function handleIncrease(){
        setCount(count + 1);
        setCount1(count1 + 10);
    }
    function handleDecrease(){
        setCount(count - 1);
        setCount1(count1 - 10);
    }
    // useEffect(() => {
    //   setCount1(count1 + 10)
    //   console.log(count);
      
    // }, [count])
    
  return (
    <div>
        <h1>Counter : {count}</h1>
        <h1>Counter1: {count1}</h1>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}
