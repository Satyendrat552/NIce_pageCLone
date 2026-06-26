import React from 'react'

const HeroTwo = () => {
  return (
    <div className='w-full h-screen flex justify-between items-center'>
      <div className='w-[65.79vw] h-full bg-[#FFFFFF] pt-[10%] pl-[15%]'>
        <h1 className='text-4xl font-bold font-serif text-shadow-2xs  '>Absolute <br /> Creativity With <br />
No Coding</h1>
<p className='text-xl font-normal font-serif text-shadow-2xs mt-10 font-thin'>Simple drag-and-drop website <br /> builder software to <br /> implement any ideas</p>
<button className='bg-[#A0367C] px-12 rounded-md shadow-md py-2 font-xl font-serif font-semibold uppercase text-white mt-10'>all features</button>
      </div>
      <div className='w-full h-full bg-[#ECECEC] relative' >
       <div className='w-[80%] h-[80%] bg-[#437AD3] absolute top-20 -left-20'>
        <div className='w-[95%] h-[90%] bg-red-200 absolute -top-10 -left-20 opacity-90'>
          <h1 className='text-center mt-10 text-6xl uppercase font-serif font-bold text-shadow-2xs'>chase your dream</h1>
          <div className='w-52 h-40 absolute left-2 top-40 '>
            <img className='w-full' src="https://images.pexels.com/photos/15387080/pexels-photo-15387080.jpeg" alt="" />
          </div>
           <div className='w-52 h-40 absolute left-40 top-[55%] '>
            <img className='w-full opacity-70' src="https://images.pexels.com/photos/30901714/pexels-photo-30901714.jpeg" alt="" />
          </div>
            <div className='w-52 h-40 absolute left-2 top-[80%] '>
            <img className='w-full opacity-70' src="https://images.pexels.com/photos/5564493/pexels-photo-5564493.jpeg" alt="" />
          </div>
        
          
          </div>
        </div>
      
       </div>
      </div>
     
   
  )
}

export default HeroTwo