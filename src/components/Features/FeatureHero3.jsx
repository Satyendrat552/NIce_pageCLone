import React from 'react'
import FeatureBtn from './FeatureBtn'

const FeatureHero3 = () => {
  const cardsData = [
    {
      id: 1,
      title: "windows application",
      image: "https://images04.nicepage.com/feature/429377/windows-application-small.jpg"
    },
    {
      id: 2,
      title: "mac os application",
      image: "https://images04.nicepage.com/feature/429373/mac-os-application-small.jpg"
    },
    {
      id: 3,
      title: "wordpress pluggin",
      image: "https://images04.nicepage.com/feature/431815/wordpress-plugin-small.jpg"
    },
    {
      id: 4,
      title: "joomla extension",
      image: "https://images04.nicepage.com/feature/431816/joomla-extension-small.jpg"
    },
    {
      id: 5,
      title: "web application",
      image: "https://images04.nicepage.com/feature/490092/web-application-small.jpg"
    },
  ];

  return (
    <>
      <div className='w-[80%] flex justify-center items-center mx-auto flex-col'>
        
        {/* Header Section */}
        <div className='w-[45vw] h-[20vw] flex justify-center items-center flex-col leading-5'>
          <h1 className='text-5xl text-center font-serif font-medium text-black'>
            Supported Systems
          </h1>
          <p className='text-normal text-center font-serif font-medium mt-8 text-gray-800'>
            Download and install the Nicepage Application for Windows or Mac OS, WordPress Plugin, and <br /> Joomla Extension, or work with Nicepage Online to build mobile-friendly websites and themes.
          </p>
          
          <div className="mt-8">
            <FeatureBtn />
          </div>
        </div>

        {/* Center Banner Image */}
        <div className='mb-8'>
          <img src="https://images04.nicepage.com/feature/531942/supported-systems.jpg" alt="Supported Systems" />
        </div>

        {/* 🛠️ FIX: overflow aur scrollbar hataya, flex-nowrap maintain rakha */}
        <div className='w-full flex flex-nowrap justify-center items-center gap-4 mx-auto mt-6 mb-12'>
          {cardsData.map((item) => (
            /* 🛠️ FIX: w-80 hatakar w-[19%] kiya taaki 5 cards 100% width me fit ho jayein bina scroll ke */
            <div key={item.id} className="w-[19%] bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs p-3 flex-shrink-0">
              
              {/* Image Container Wrapper */}
              <div className="w-full h-40 bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  className="w-full h-full object-cover" 
                  src={item.image} 
                  alt={item.title} 
                />
              </div>

              {/* Title */}
              <h1 className="text-base font-serif font-bold text-gray-800 capitalize mt-4 text-center truncate">
                {item.title}
              </h1>

            </div>
          ))}
        </div>
        
      </div>
    </>
  )
}

export default FeatureHero3;