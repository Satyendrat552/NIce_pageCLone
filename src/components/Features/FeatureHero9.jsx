import React from 'react'
import FeatureBtn from './FeatureBtn'

const FeatureHero9 = () => {
  const cardsData = [
    {
      id: 1,
      title: "1000+ Web Page Templates",
      desc: "Design your new website in minutes. Start with the collection of designer-made templates for web pages. All",
      image: "https://images04.nicepage.com/feature/518704/1000-web-page-templates-small.jpg"
    },
    {
      id: 2,
      title: "9'000+ Block Designs",
      desc: "You can create websites from ready-made blocks. Enjoy your web design process, as you can now play with",
      image: "https://images04.nicepage.com/feature/518709/9-000-block-designs-small.jpg"
    },
    {
      id: 3,
      title: "3M+ Image Library",
      desc: "Get access to millions of free and paid photos, vector illustrations, and cut-outs. Quickly search and find necessary",
      image: "https://images04.nicepage.com/feature/518671/3m-image-library-small.jpg"
    },
    {
      id: 4,
      title: "2.5M+ Icon Collection",
      desc: "Use millions of beautiful icons perfect for any website design. All icons are vector-based, fully sizable, and adjusted",
      image: "https://images04.nicepage.com/feature/518701/2-5m-icon-collection-small.jpg"
    }
  ];
  return (
    <>
    <div className='w-[90%] mx-auto flex justify-center items-center flex-col gap-10'>
   <div className='w-[60%] mx-auto flex justify-center items-center flex-col gap-5'>
    <h1 className='text-4xl font-semibold capitalize'>Media Libraries</h1>
    <p className='max-w-[702px] text-center'>Use our rich media libraries to add images and icons to your pages. You can also use our fully responsive web templates as the easy start of your web design creation process and expand any of your websites with our designer-made blocks.</p>
    <div>
      <FeatureBtn/>
    </div>
    </div>
    <img src="https://images04.nicepage.com/feature/546036/media-libraries.jpg" alt="" />
    </div>
    <div className='w-[85%] xl:w-[80%] mx-auto mt-14 mb-10'>
      
      {/* 🛠️ GRID CONTAINER: Mobile par 1, Tablet par 2, aur Desktop par exactly 4 columns */}
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {cardsData.map((item) => (
          
          /* Single Card - Medium Sized & Compact */
          <div 
            key={item.id} 
            className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs p-3 transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col min-h-[310px]"
          >
            
            {/* 1. Image Area */}
            <div className="w-full h-36 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
              <img 
                className="w-full h-full object-cover" 
                src={item.image} 
                alt={item.title} 
              />
            </div>

            {/* 2. Title Area */}
            <h1 className="text-base font-serif font-bold text-gray-800 capitalize mt-4 text-center truncate w-full">
              {item.title}
            </h1>

            {/* 3. Description Area */}
            <p className="text-sm font-serif font-normal text-gray-500 mt-2 text-center leading-relaxed overflow-hidden line-clamp-4">
              {item.desc}
            </p>

          </div>
        ))}
      </div>

    </div>
    </>
  )
}

export default FeatureHero9