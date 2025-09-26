import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const Projects = () => {
  const projects = [
    {
    image1: '/images/nav-img.jpg',
    image2: '/images/nav-img.jpg'
  }, 
    {
    image1: '/images/nav-img.jpg',
    image2: '/images/nav-img.jpg'
  }, 
    {
    image1: '/images/nav-img.jpg',
    image2: '/images/nav-img.jpg'
  }, 
    {
    image1: '/images/nav-img.jpg',
    image2: '/images/nav-img.jpg'
  }, 
]
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(()=>{
    gsap.from('.hero', {
      height:"100px",
      stagger:{
        amount:0.5
      },
      scrollTrigger:{
        trigger:".lol",
        markers:true,
        start:"top 100%",
        end:"top -150%",
        scrub:true,
      }
    })
  })
  return (
    <div className='p-2 mb-[20vh]' >
      <div className='pt-[45vh]'>
        <h2 className="font[font2] text-[8.5vw] uppercase">Projects</h2>
      </div>
      <div className='-mt-[4vh] lol'>
        {
          projects.map((elem,idx)=>
          (
            <div key={idx} className='hero w-full mb-4 flex gap-4'>
              <ProjectCard image1={elem.image1} image2={elem.image2}  />    
            </div>
          )
        )
        }
      </div>
    </div>
  )
}

export default Projects