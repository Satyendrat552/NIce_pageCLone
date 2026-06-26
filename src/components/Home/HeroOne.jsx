import React from 'react'
import Cards from './Cards'

const HeroOne = ({ style }) => {
  return (
    <div className="relative w-full h-screen">

      {/* Left Background */}
      <div
        className={`w-1/3 h-[120vh] bg-gradient-to-b from-[#4B61C0] to-[#91418E] ${style}`}
      ></div>

      {/* Main Content */}
      <div className="w-[70%] h-screen overflow-hidden bg-[#0F2555]/95 absolute left-[15%] top-[15%] p-12">

        <p className="text-white text-2xl font-thin">
          Ultimate Freehand. Web Design 3.0
        </p>

        <h1 className="text-white  font-serif text-6xl font-bold mt-8">
          Create stunning
        </h1>

        <h1 className="text-white font-serif text-6xl font-bold mt-4">
          websites and themes
        </h1>

        <p className="text-white text-2xl font-thin mt-8">
          Website Builder Software. Mobile-Friendly. No Coding
        </p>

        <p className="text-white text-2xl font-bold">
          WordPress, Joomla, HTML5, Windows, Mac OS and Online
        </p>

        <div className="flex justify-center items-center mt-10">
          <button className="bg-[#F15048] text-white text-2xl px-20 py-4 rounded-md">
            Download Now
          </button>
        </div>


      </div>

      {/* Stats Box */}
      <div className="w-60 h-60 bg-[#4381EA] absolute top-[4%] right-10 flex flex-col items-center justify-center">

        <h2 className="text-white text-3xl font-bold uppercase leading-none">
          Web Design
        </h2>

        <h1 className="text-white text-[200px] font-semibold leading-none -mt-8">
          30
        </h1>

      </div>
      
        <div className="absolute top-[95%] left-[5%] flex justify-center items-center  gap-2 w-full ">
          <Cards />
        </div>

    </div>
  )
}

export default HeroOne