import React from 'react'
import { Link } from 'react-router-dom'
import Counter from './Counter'

export default function Home() {
    return (
        <div>
            <Link to="/">Home Page</Link>
            <Link to="/stopwatch">StopWatch app</Link>
            <Link to="/counter">Counter app</Link>
        </div>
    )
}
