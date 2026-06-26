import React from 'react'


const Card = ({icon,description,title}) => {
  return (
    <div className='w-52 h-52 bg-[#577DBE] opacity-60 rounded-md'>
       <div className='w-full flex justify-center items-center p-4'>
         {icon}
       </div>
       <div className='w-full text-center'>
        <h1 className='text-white text-xl capitalize'>{description}</h1>
         <h1 className='text-white text-xl capitalize'>{title}</h1>
       </div>
    </div>
  )
}

export default Card