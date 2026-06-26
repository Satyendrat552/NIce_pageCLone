import React from 'react'
import HeroFourCards from './HeroFourCards'

const Herofour = () => {
  const data = [
  {
    name: "10,000+ of Website & Block Templates",
    description: "Select from a huge variety of designer-made templates.",
    color: "bg-[#6892D7]",
    value1: "-translate-y-[8vw]",
    value2: "translate-x-[1vw]"
  },
  {
    name: "Easy Drag-n-Drop",
    description: "Customize anything on your website with simple dragging.",
    color: "bg-[#F15048]",
    value1: "-translate-y-[10vw] -translate-x-[3vw]",
    value2: "-translate-y-[3vw] translate-x-[2vw]"
  },
  {
    name: "No Coding",
    description: "Visually add, edit, move, and modify with no coding!",
    color: "bg-[#5CB85C]",
    value1: "-translate-y-[8vw] -translate-x-[2vw]",
    value2: "-translate-y-[1vw] -translate-x-[1vw]"
  },
  {
    name: "Mobile-Friendly",
    description: "Build websites that look great on all modern devices.",
    color: "bg-[#FB9056]",
    value1: "-translate-y-[10vw] translate-x-[1vw]",
    value2: "-translate-y-[3vw] translate-x-[2vw]"
  }
];
  
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col gap-[10vw] h-[90vh] bg-[#FFFFFF]'>
      <h1 className='text-5xl font-serif capitalize font-semibold '>All You Need And More</h1>
      <div className=' flex justify-center translate-y-[2vw] items-center gap-20'>
       {data.map((item)=>(
             <HeroFourCards
      key={item.id}
      color={item.color}
     
      value1={item.value1}
      value2={item.value2}
      name={item.name}
      description={item.description}
    />
       ))}
      </div>
      <button className=' bg-[#B23C8A] text-white uppercase px-12  py-2 font-semibold rounded-md font-serif -translate-y-[3vw]'>see all features</button>
    </div>
  )
}

export default Herofour