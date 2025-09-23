import React from 'react'

const Video = () => {
  return (
    <div className='w-full h-full'>
        <video className='w-full h-full object-cover' loop muted autoPlay src="/videos/bg-main.mp4"></video>
    </div>
  )
}

export default Video