import React from 'react'
import FeatureBtn from './FeatureBtn'

const FeatureHero5 = () => {
  const cardsData = [
    {
      id: 1,
      title: "Visual Gradient Editor",
      description: "Visual Gradient Editor You can edit the Gradient property visually on the bar, allowing you to add and move stops as bar points for the Gradient. Add the",
      image: "https://images04.nicepage.com/feature/6656966/visual-gradient-editor-small.jpg"
    },
    {
      id: 2,
      title: "Multi-Layer Background",
      description: "Multi-Layer Background You can use the Multi-Layer Background on Blocks, Boxes, Grid Cells, and Grid Repeater Items. This option allows you to add creative",
      image: "https://images04.nicepage.com/feature/6656967/multi-layer-background-small.jpg"
    },
    {
      id: 3,
      title: "Freehand Drag-And-Drop",
      description: "Design your web pages and templates by drag and drop. Enjoy your works while building beautiful websites in a playful",
      video: "https://images04.nicepage.com/feature/434857/freehand-drag-and-drop-small.mp4"
    },
    {
      id: 4,
      title: "Smart Magnetic Guides",
      description: "Use the Smart Magnetic Guides to align and perfect the position of elements in the design. You can see the quick guides while moving an element that snaps to other",
      video: "https://images04.nicepage.com/feature/519183/smart-magnetic-guides-small.mp4"
    },
    {
      id: 5,
      title: "Grid Columns",
      description: "The Grid Columns are a useful layout tool for graphic and website editors. They facilitate the positioning and alignment of web design elements on a web page.",
      video: "https://images04.nicepage.com/feature/1437436/grid-columns-small.mp4"
    },
  ];

  return (
    <>
      {/* Upper Hero Section */}
      <div className='w-[90%] mx-auto flex justify-center items-center flex-col mt-10'>
        <div className='w-[50%] mx-auto flex justify-center items-center flex-col'>
          <h1 className='text-4xl text-gray-900 capitalize font-medium '>
            Visual Page Editor
          </h1>
          <p className='text-normal text-center text-gray-800 font-serif font-normal mt-7'>
            Use the Visual Page Editor to edit content like text, images, grids, and other elements using the powerful drag-and-drop positioning. It is very time-saving as it requires no coding to design any websites, themes, eCommerce templates, and blog posts.
          </p>
          <div className='mt-7'>
            <FeatureBtn />
          </div>
        </div>
        <img className='mt-10' src="https://images04.nicepage.com/feature/537312/visual-page-editor.jpg" alt="Visual Page Editor" />
      </div>

      {/* Cards Section */}
      {/* 🛠️ FIX: w-[90%] ko w-[80%] (ya lg:w-[75%]) kar diya taaki cards screen par failne ke bajaye medium size ke dikhein */}
      <div className='w-[80%] xl:w-[75%] mx-auto mt-14 mb-10'>
        
        <div className='w-full grid grid-cols-4 gap-5'>
          {cardsData.map((item) => (
            
            /* 🛠️ FIX: min-h-[380px] ko hata kar min-h-[320px] kiya, taaki cards ki lambai medium ho jaye */
            <div 
              key={item.id} 
              className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs p-3 transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col min-h-[320px]"
            >
              {/* Media Container (Image / Video Box) */}
              <div className="w-full h-32 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
                {item.video ? (
                  <video 
                    className="w-full h-full object-cover" 
                    src={item.video} 
                    muted 
                    autoPlay 
                    loop 
                    playsInline
                  />
                ) : (
                  <img 
                    className="w-full h-full object-cover" 
                    src={item.image} 
                    alt={item.title} 
                  />
                )}
              </div>

              {/* Title Container */}
              {/* 🛠️ FIX: Text thoda sa scale kiya taaki medium card me fit baithe */}
              <h1 className="text-lg font-serif font-bold text-gray-800 capitalize mt-4  truncate w-full">
                {item.title}
              </h1>

              {/* Description Container */}
              <p className="text-sm font-serif font-normal text-gray-700 mt-2 leading-relaxed overflow-hidden line-clamp-4">
                {item.description}
              </p>

            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default FeatureHero5;