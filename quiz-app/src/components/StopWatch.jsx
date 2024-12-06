import React, { useEffect, useState } from 'react'

export default function StopWatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [time,setTime] = useState(0);
    const [validId,setValidId] = useState(null);
    const handleStartStop = () => {
        setIsRunning((value) => !value)
        clearInterval(validId);
    }
    const handleReset = () => {
        setTime(0);
        clearInterval(validId);
    }
    useEffect(() => {
        if (isRunning) {
            const id = setInterval(() => {
              setTime((v) => v+1)
            },1000)
            setValidId(id)
        }
        return () => clearInterval(validId)
    }, [isRunning])
    const formattime = (time) => {
        const hour = Math.floor(time/3600)
        const h = hour<10 ? ('0'+hour): hour
        const minutes = Math.floor(hour/60);
        const m = minutes<10 ? ('0'+minutes): minutes
        const seconds = time%60;
        const s = seconds<10 ? ('0'+seconds): seconds
        return `${h}:${m}:${s}`
    }
    
  return (
    <div>
        <h1>Stop Watch App</h1>
        <h1>Timer: {formattime(time)}</h1>
        <button onClick={handleStartStop}>{isRunning ? "Stop" : "Start"}</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}
