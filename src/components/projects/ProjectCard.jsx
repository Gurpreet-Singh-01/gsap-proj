import React from 'react'

const ProjectCard = (props) => {
    return (
        <>
            <div className='w-1/2 group h-full hover:rounded-[50px] relative overflow-hidden transition-all' >
                <img src={props.image1} className='h-full w-full object-cover' alt="" />
                <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/50'>
                    <h2 className='uppercase font-[font1] text-4xl border-2 rounded-full text-white border-white pt-2 px-5'>View Project</h2>
                </div>
            </div>
            <div className='w-1/2 group h-full hover:rounded-[50px] relative overflow-hidden transition-all' >
                <img src={props.image2} className='h-full w-full object-cover' alt="" />
                <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/50'>
                    <h2 className='uppercase font-[font1] text-4xl border-2 rounded-full text-white border-white pt-2 px-5'>View Project</h2>
                </div>
            </div>
        </>
    )
}

export default ProjectCard