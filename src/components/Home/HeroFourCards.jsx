import React from 'react'

const HeroFourCards = ({value1,value2,color,name,description}) => {
  return (
    <div className= 'w-60 h-60  relative' >
    <div className={`absolute top-10 left-10 w-60 h-60  ${value1} ${color}`}>
     
      

    </div>
    <div className={`absolute flex justify-center items-center flex-col text-center shadow-2xl    w-60 h-60 bg-[#FFFFFF] text-shadow-2xs p-2  ${value2}`}>
      <h1 className='mt-2 text-2xl font-serif font-bold'>{name}</h1>
      <p className='text-xl font-serif font-medium mt-[2vw]'>{description}</p>
    </div>
    </div>
  )
}

export default HeroFourCards