import React from 'react'
import { Link } from 'react-router-dom'
import Counter from './Counter'

export default function Home() {
    return (
        <div>
            <Link to="/">Home Page</Link>
            <Link to="/login">Login Page</Link>
            <Link to="/counter">Counter PAge</Link>
        </div>
    )
}
