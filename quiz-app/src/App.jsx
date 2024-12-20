import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Counter from './components/Counter'
import StopWatch from './components/StopWatch'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element=<Home/> />
        <Route path="/stopwatch" element={<StopWatch/>} />
        <Route path="/counter" element={<Counter/>} />
      </Routes>
    </>
  )
}

export default App
