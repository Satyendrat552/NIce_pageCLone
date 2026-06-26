import React from 'react'

const FeatureHero1 = () => {
  return (
    <div className='w-[95%] h-[50vh] mx-auto relative overflow-hidden rounded-lg '>
      <div className='w-full h-full flex justify-center items-center flex-col gap-8 p-4  bg-[#93A9C2] '>
       <h1 className='text-white text-3xl capitalize font-serif'>Review 400+ Nicepage Features</h1>
    <p className='text-medium text-white font-seri font-medium capitalize'>Explore the powerful features you can use to build and customize stunning,<br /> instantly mobile-friendly websites and themes with no coding.</p>
    <button className='px-5 py-3 rounded-md hover:bg-red-500 bg-[#F15048] shadow-xs text-white text-xl font-seri font-normal capitalize'>start now</button>
      </div>
       <img className='absolute top-[12vw] -rotate-12 -left-10 w-[15vw] h-[15vw]' src="https://images.pexels.com/photos/7147480/pexels-photo-7147480.jpeg" alt="" />
        <img className='absolute -top-[5vw] rotate-12 -left-10 w-[15vw] h-[15vw]' src="https://images.pexels.com/photos/6486987/pexels-photo-6486987.jpeg" alt="" />
       <img className='absolute top-[12vw] -right-[20px] -rotate-12 w-[20vw] h-[15vw]' src="https://images.pexels.com/photos/6665026/pexels-photo-6665026.jpeg" alt="" />
        <img className='absolute -top-[5vw] -right-[20px] rotate-12 w-[20vw] h-[15vw]' src="https://images.pexels.com/photos/8572605/pexels-photo-8572605.jpeg" alt="" />
         <img className='absolute top-[12vw] right-[25vw] w-[10vw] h-[10vw]' src="https://img.icons8.com/?size=100&id=13347&format=png&color=000000" alt="" />
    </div>
  
  )
}

export default FeatureHero1