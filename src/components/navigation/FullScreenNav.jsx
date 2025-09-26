import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

const FullScreenNav = () => {

  const fullNavLinkRef = useRef(null)
  useGSAP(() => {

    const tl = gsap.timeline();

    tl.from(".stairs", {
      delay: 1,
      height: 0,
      stagger: {
        amount: -0.34,
      }
    })

    tl.from(fullNavLinkRef.current, {
      opacity: 0,
    })

    tl.from(".link", {})

  })
  return (
    <div id='fullScreenNav' className='h-screen  text-white w-full absolute '>

      <div className='h-screen w-full fixed'>

        <div className='h-full w-full flex'>
          <div className='stairs h-full w-1/5 bg-black' ></div>
          <div className='stairs h-full w-1/5 bg-black' ></div>
          <div className='stairs h-full w-1/5 bg-black' ></div>
          <div className='stairs h-full w-1/5 bg-black' ></div>
          <div className='stairs h-full w-1/5 bg-black' ></div>

        </div>
      </div>

      <div ref={fullNavLinkRef} className='relative'>
        <div className="flex w-full justify-between p-5 items-start">
          <div className='p-5'>
            <div className='w-[8vw]'>
              <svg className=' w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
              </svg>
            </div>
          </div>
          <div className="relative size-30 cursor-pointer group">
            {/* Left Diagonal */}
            <div className="absolute inset-0 w-[2px] h-full bg-white rotate-45 group-hover:bg-[#d3fd50] transition-colors duration-300 mx-auto"></div>

            {/* Right Diagonal */}
            <div className="absolute inset-0 w-[2px] h-full bg-white -rotate-45 group-hover:bg-[#d3fd50] transition-colors duration-300 mx-auto"></div>
          </div>

        </div>
        <div id='allLinks' className='py-[7vh]'>
          <div className='link cursor-pointer border-t-1 relative border-white'>
            <h1 className='font-[font2]  text-[8vw] leading-[0.8] pt-[1.5vh] text-center uppercase'>Projects</h1>
            <div className='moveLink absolute bg-[#d3fd50] text-black top-0 flex'>

              <div className='moveX flex items-center w-max '>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-[1.5vh] text-center uppercase'>Pour Tout Voir</h2>
                <img className='rounded-full h-[10vh] object-cover' src="/images/nav-img.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-[1.5vh] text-center uppercase'>Pour Tout Voir</h2>
                <img className='rounded-full h-[10vh] object-cover' src="/images/nav-img.jpg" alt="" />
              </div>
              <div className='moveX flex items-center w-max '>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-[1.5vh] text-center uppercase'>Pour Tout Voir</h2>
                <img className='rounded-full h-[10vh] object-cover' src="/images/nav-img.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-[1.5vh] text-center uppercase'>Pour Tout Voir</h2>
                <img className='rounded-full h-[10vh] object-cover' src="/images/nav-img.jpg" alt="" />
              </div>

            </div>
          </div>
          <div className='link cursor-pointer border-t-1 relative border-white'>
            <h1 className='font-[font2]  text-[8vw] leading-[0.8] pt-[1.5vh] text-center uppercase'>Projects</h1>
            <div className='moveLink absolute bg-[#d3fd50] text-black top-0 flex'>

              <div className='moveX flex items-center w-max '>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-[1.5vh] text-center uppercase'>Pour Tout Voir</h2>
                <img className='rounded-full h-[10vh] object-cover' src="/images/nav-img.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-[1.5vh] text-center uppercase'>Pour Tout Voir</h2>
                <img className='rounded-full h-[10vh] object-cover' src="/images/nav-img.jpg" alt="" />
              </div>
              <div className='moveX flex items-center w-max '>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-[1.5vh] text-center uppercase'>Pour Tout Voir</h2>
                <img className='rounded-full h-[10vh] object-cover' src="/images/nav-img.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-[1.5vh] text-center uppercase'>Pour Tout Voir</h2>
                <img className='rounded-full h-[10vh] object-cover' src="/images/nav-img.jpg" alt="" />
              </div>

            </div>
          </div>
          <div className='link cursor-pointer border-t-1 relative border-white'>
            <h1 className='font-[font2]  text-[8vw] leading-[0.8] pt-[1.5vh] text-center uppercase'>Projects</h1>
            <div className='moveLink absolute bg-[#d3fd50] text-black top-0 flex'>

              <div className='moveX flex items-center w-max '>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-[1.5vh] text-center uppercase'>Pour Tout Voir</h2>
                <img className='rounded-full h-[10vh] object-cover' src="/images/nav-img.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-[1.5vh] text-center uppercase'>Pour Tout Voir</h2>
                <img className='rounded-full h-[10vh] object-cover' src="/images/nav-img.jpg" alt="" />
              </div>
              <div className='moveX flex items-center w-max '>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-[1.5vh] text-center uppercase'>Pour Tout Voir</h2>
                <img className='rounded-full h-[10vh] object-cover' src="/images/nav-img.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-[1.5vh] text-center uppercase'>Pour Tout Voir</h2>
                <img className='rounded-full h-[10vh] object-cover' src="/images/nav-img.jpg" alt="" />
              </div>

            </div>
          </div>
          <div className='link cursor-pointer border-y-1 relative border-white'>
            <h1 className='font-[font2]  text-[8vw] leading-[0.8] pt-[1.5vh] text-center uppercase'>Projects</h1>
            <div className='moveLink absolute bg-[#d3fd50] text-black top-0 flex'>

              <div className='moveX flex items-center w-max '>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-[1.5vh] text-center uppercase'>Pour Tout Voir</h2>
                <img className='rounded-full h-[10vh] object-cover' src="/images/nav-img.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-[1.5vh] text-center uppercase'>Pour Tout Voir</h2>
                <img className='rounded-full h-[10vh] object-cover' src="/images/nav-img.jpg" alt="" />
              </div>
              <div className='moveX flex items-center w-max '>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-[1.5vh] text-center uppercase'>Pour Tout Voir</h2>
                <img className='rounded-full h-[10vh] object-cover' src="/images/nav-img.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-[1.5vh] text-center uppercase'>Pour Tout Voir</h2>
                <img className='rounded-full h-[10vh] object-cover' src="/images/nav-img.jpg" alt="" />
              </div>

            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default FullScreenNav