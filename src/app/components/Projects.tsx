import React from 'react'

import Heading from './Heading'
import Card from './Card'
const data =[

{
    id: 0,
    title:"Todo list",
    desc:"A react & typescript based app for managing and organising",
    img:"/project03.jpg",tags:["react","node", "css" ,"Typescript"],
},

{
    id: 1,
    title:"CountDown Timer",
    desc:"A react & typescript based app for managing and organising",
    img:"/project04.jpg",
    tags:["react","node", "css" ,"Typescript"],
},

{
    id: 2,
    title:"Static  Interactive Resume Builder",
    desc:"A react & typescript based app for managing and organising",
    img:"/project01.jpg",
    tags:["react","node", "css" ,"Typescript"],
},

{
    id: 3,
    title:"Simple Calculator",
    desc:"A react & typescript based app for managing and organising",
    img:"/project02.jpg",
    tags:["react","node", "css" ,"Typescript"],
},

    
]

const Projects = () => {
  return (
    <div  id="projects" className='container pt-32'>
      <Heading title="My projects" />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:rid-cols-2 lg:grid-cols-2 place-items-center'>
        {data.map((el)=>(<Card 
        
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
