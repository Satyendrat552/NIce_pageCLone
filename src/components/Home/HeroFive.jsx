import React from 'react'

const HeroFive = () => {
  return (
    <div className='w-full min-h-screen  flex justify-center items-center flex-col gap-[2vw] bg-gradient-to-r from-[#4B61C0] to-[#91418E] relative'>
      
      <div className='w-full text-center pt-10'>
        <h1 className='text-[2.7vw] text-white font-semibold capitalize font-serif'>
          Start With Beautiful Website Templates
        </h1>

        <p className='text-xl capitalize text-white mt-1 font-medium font-serif'>
          Choose from 10,000+ awesome, mobile-friendly website templates for every kind of websites and blocks
        </p>

        <button className='px-14 py-2 shadow-2xs mt-10 bg-[#FFFFFF] text-black font-serif font-semibold uppercase text-xl rounded-md'>
          Get Template
        </button>
      </div>

      <div className='w-full  flex justify-center items-center  relative h-[57vw] '>
        
        <div className='w-full '>
          <img className='absolute -translate-y-[25vw] -translate-x-[2vw]'
            src="https://images03.nicepagecdn.com/a122014e1e8cdf24af08f98c/c2352d0c748d5981b36d020d/templates2.png"
            alt=""
          />
        </div>

        <div className='w-full   '>
          <img className=' absolute -translate-y-[25vw] -translate-x-[10vw]'
            src="https://images03.nicepagecdn.com/a122014e1e8cdf24af08f98c/5864de0e70f05b2badaa48ba/examplesopt.jpg"
            alt=""
          />
        </div>

      </div>

    </div>
  )
}

export default HeroFive