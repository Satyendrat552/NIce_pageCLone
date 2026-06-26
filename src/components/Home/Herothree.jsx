import React from 'react'

const Herothree = () => {
  return (
    <div className=" w-full h-screen bg-gradient-to-r from-[#91418E] to-[#4B61C0] flex justify-between">
      <div className='w-full relative'>
      <img className='absolute translate-y-20 translate-x-20' src="https://images03.nicepagecdn.com/a122014e1e8cdf24af08f98c/61abe115407653fa90dd9398/old.jpg" alt="" />
        <img className='absolute translate-y-[40%] translate-x-[140%]' src="https://images03.nicepagecdn.com/a122014e1e8cdf24af08f98c/253fa47eb54f5844a678c0ea/new.jpg" alt="" />
          <img className='absolute translate-y-[30%] translate-x-[170%]' src="https://images03.nicepagecdn.com/a122014e1e8cdf24af08f98c/2b50004bd3e559a7ac1dac93/arrow350.png" alt="" />
      </div>
      <div className='w-[30vw] text-white  h-60  -translate-x-[60%] translate-y-[80%]'>
        <h1 className='text-4xl text-start font-serif font-semibold'>What Is <br />
Web Design 3.0?</h1>
<p className='text-xl font-serif font-thin mt-4'>Learn how to build the trendiest websites and themes on the Web. </p>
<button className='text-xl font-serif rounded-md  mt-4 px-8 py-3 bg-[#F15048] font-semibold text-shadow-2xs uppercase'>discover the secret</button>

      </div>
    

    </div>
  )
}

export default Herothree