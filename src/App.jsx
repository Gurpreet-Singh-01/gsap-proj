import {Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agents from './pages/Agents'
import Projects from './pages/Projects'

const App = () => {

  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agents' element={<Agents />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App