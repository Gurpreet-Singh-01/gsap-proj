import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agents from './pages/Agents'
import Projects from './pages/Projects'
const App = () => {
  return (
    <div>
      {/* <Link className='text-blue-400 underline mr-5' to="/" >Home</Link>
      <Link className='text-blue-400 underline mr-5' to="/projects" >Projects</Link>
      <Link className='text-blue-400 underline mr-5' to="/agents" >Agents</Link> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/agents' element={<Agents/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
    </div>
  )
}

export default App