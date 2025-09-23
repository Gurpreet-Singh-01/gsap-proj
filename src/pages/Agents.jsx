import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agents = () => {

  const imgArr = [
    "/images/agent-1.jpg",
    "/images/agent-2.jpg",
    "/images/agent-3.jpg",
    "/images/agent-4.jpg",
    "/images/agent-5.jpg",
    "/images/agent-6.jpg",
    "/images/agent-7.jpg",
    "/images/agent-8.jpg",
    "/images/agent-9.jpg",
    "/images/agent-10.jpg",
    "/images/agent-11.jpg",
    "/images/agent-12.jpg",
    "/images/agent-13.jpg",
    "/images/agent-14.jpg",
  ]

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 25%",
        end: "top -80%",
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          let imageIndex;
          if (self.progress < 1) {
            imageIndex = Math.floor(self.progress * imgArr.length);
          } else {
            imageIndex = Math.floor(self.progress * imgArr.length) - 1;
          }
          imageRef.current.src = imgArr[imageIndex]
        }
      }
    })
  });


  return (
    <div>
      <div className='section-1' >
        <div ref={imageDivRef} className='absolute overflow-hidden h-[20vw] w-[15vw] top-[25vh] rounded-md left-[30vw]'>
          <img ref={imageRef} className='h-full w-full object-cover'
            src="/images/agent-1.jpg" />
        </div>
        <div className=' relative font-[font2]'>
          <div className='mt-[55vh]'>
            <h1 className='text-[19vw] text-center leading-[18vw] uppercase' >Soixan7e <br />
              Douze</h1>
          </div>
          <div className='pl-[40%]' >
            <p className='text-4xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  )
}

export default Agents;