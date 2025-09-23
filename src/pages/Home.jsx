import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'

const Home = () => {
  return (
    <div className='text-white'>
      <div className=" w-screen h-screen fixed ">
        <Video />
      </div>
      <div className=" w-screen h-screen overflow-hidden pb-5 relative flex flex-col justify-between">
        <HomeHeroText/>
        <HomeBottomText/>
      </div>
    </div>
  )
}

export default Home