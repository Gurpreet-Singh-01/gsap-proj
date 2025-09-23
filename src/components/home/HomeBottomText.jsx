import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='flex items-center justify-center gap-2 '>
      <div className='border-3 hover:border-[#d3f350] hover:text-[#d3f350] h-[15vh] flex items-center px-10 border-white rounded-full uppercase'>
      <Link to='/projects' className='text-[6vw] mt-3 font-[font2] ' >Projects</Link>
      </div>
      
      <div className='border-3 hover:border-[#d3f350] hover:text-[#d3f350] h-[15vh] flex items-center px-10 border-white rounded-full uppercase'>
      <Link to='/agents' className='text-[6vw] mt-3 font-[font2] ' >Agents</Link>
      </div>
      
    </div>
  )
}

export default HomeBottomText