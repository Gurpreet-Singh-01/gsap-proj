import React from 'react'

const Agents = () => {
  return (
    <div>
      <div className='section-1' >
        <div className='absolute overflow-hidden h-[20vw] w-[15vw] top-[30vh] rounded-md left-[30vw] bg-red-500'>
          <img className='h-full w-full object-cover'
            src="/images/agent-1.jpg" />
        </div>
        <div className=' relative font-[font2]'>
          <div className='mt-[55vh]'>
            <h1 className='text-[19vw] text-center leading-[18vw] uppercase' >Soixan7e <br />
              Douze</h1>
          </div>
          <div className='pl-[40%]' >
            <p className='text-2xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  )
}

export default Agents;