import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Counter from './components/Counter'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element=<Home/> />
        <Route path="/login" element={<h1>Login PAge</h1>} />
        <Route path="/logout" element={<h1>Logout PAge</h1>} />
        <Route path="/signup" element={<h1>Signup PAge</h1>} />
        <Route path="/counter" element={<Counter/>} />
      </Routes>
    </>
  )
}

export default App
