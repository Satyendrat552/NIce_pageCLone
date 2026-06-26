import React from 'react'
import BlogBtn from './BlogBtn'
const Blogs = ({item}) => {
 
  return (
  <div className='w-[70%] min-h-screen  flex flex-col justify-center items-center gap-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
   
       <div  className='w-full flex flex-col justify-start items-start p-4'>
      <p>{item.date}</p>
     <h1 className='text-4xl font-semibold capitalize mt-3'>{item.title}</h1>
     <p className='text-normal font-normal text-gray-800 capitalize mt-4'>{item.description}
      </p>
      <img className='w-full mt-4' src={item.image} alt="" />
    <div className='mt-10'>
      <BlogBtn/>
    </div>
     
    </div>
  
  </div>
  )
}

export default Blogs