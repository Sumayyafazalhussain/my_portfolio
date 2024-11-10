import React from 'react'

const Skills = () => {
  return (
    <div  id="skills" className="container pt-32">
        <div className='grid md:grid-cols-2 gap-20 items-center'>
<div data-aos="zoom-in-up">
    <h2 className='text-4xl md:text-5xl'>Technologies I work</h2>
    <p className='text-black-500 pt-2'>I am Proficient in many Skills like CIT, WEB DEVELOPMENT, WORDPRESS, TYPESCRIPT HTML & CSS & MUCH MORE</p>
</div>
<div>
    <div className='grid grid-cols-2 text-BLACK text-3xl sm:text-4xl'>
        <div className='space-y-2'>
            <h2 data-aos="zoom-in-up">TypeScript</h2>
            <h2 data-aos="zoom-in-up">Html</h2>
            <h2 data-aos="zoom-in-up">CSS</h2>
        </div>
        <div className='space-y-2'>
            <h2 data-aos="zoom-in-up">CIT</h2>
            <h2 data-aos="zoom-in-up">WORDPRESS</h2>
            <h2 data-aos="zoom-in-up">NEXT.JS</h2>
        </div>
    </div>
</div>
        </div>
      
    </div>
  )
}

export default Skills
