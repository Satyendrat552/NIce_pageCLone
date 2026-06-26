import React from 'react'
import  { useRef } from 'react';
import FeatureBtn from './FeatureBtn'

const FeatureHero6 = () => {
 const cardsData = [
    { 
      id: 1, 
      title: "text element", 
      desc: "You can edit the Gradient property visually on the bar, allowing you to add and move stops.", 
      image: "https://images04.nicepage.com/feature/476595/text-element-small.jpg" 
    },
    { 
      id: 2, 
      title: "button element", 
      desc: "You can use the Multi-Layer Background on Blocks, Boxes, Grid Cells, and Grid Repeater Items.", 
      image: "https://images04.nicepage.com/feature/481899/button-element-small.jpg" 
    },
    { 
      id: 3, 
      title: "image element", 
      desc: "Design your web pages and templates by drag and drop. Enjoy building websites in a playful way.", 
      image: "https://images04.nicepage.com/feature/476806/image-element-small.jpg" 
    },
    { 
      id: 4, 
      title: "icon element", 
      desc: "Use the Smart Magnetic Guides to align and perfect the position of elements in the design.", 
      image: "https://images04.nicepage.com/feature/476828/icon-element-small.jpg" // Note: If needed, you can use an image URL here
    },
    { 
      id: 5, 
      title: "hyperlink element", 
      desc: "The Grid Columns are a useful layout tool for graphic and website editors to align design elements.", 
      image: "https://images04.nicepage.com/feature/481903/hyperlink-element-small.jpg" 
    },
    { 
      id: 6, 
      title: "Preset shapes", 
      desc: "Download and install the dedicated Mac OS application to design websites completely offline.", 
      image: "https://images04.nicepage.com/feature/481905/preset-shapes-small.jpg" 
    },
    
  ];
  const scrollRef = useRef(null);

  // Smooth scroll logic
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320; // Scroll distance in pixels
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  return (
    <>
    <div className='w-[90%] mx-auto flex justify-center items-center flex-col gap-8'>
      <div className='w-[50%] mx-auto flex justify-center items-center flex-col gap-5  '> 
       <h1 className='text-4xl text-gray-900 font-semibold'>Design Elements</h1>
       <p className='text-normal text-center text-gray-800'>Design your great-looking pages with essential web design elements, like Text, Image, Hyperlink, Icon, Shape, and Button. You can place all design elements freely in the Editor with the powerful drag-and-drop.</p>
       <div className=''>
        <FeatureBtn/>
       </div>
      </div>
      <img src="https://images04.nicepage.com/feature/535612/design-elements.jpg" alt="" />
    </div>
    <div className="w-[90%] md:w-[80%] mx-auto mt-16 mb-16 relative">
      
      {/* Slider Wrapper Container */}
      <div className="relative flex items-center">
        
        {/* Left Arrow Circular Button */}
        <button 
          onClick={() => scroll('left')} 
          className="absolute left-[-20px] md:left-[-25px] z-10 w-12 h-12 flex justify-center items-center bg-white border border-gray-200 rounded-full shadow-md hover:bg-gray-50 hover:shadow-lg transition-all active:scale-95"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Scrollable Row */}
        <div 
          ref={scrollRef} 
          className="w-full flex gap-5 overflow-x-auto scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none' }}
        >
          {cardsData.map((item) => (
            
            /* Card Component */
            <div 
              key={item.id} 
              className="w-72 flex-shrink-0 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs p-3 transition-all duration-300 hover:shadow-md flex flex-col min-h-[340px]"
            >
              {/* 1. Image Tag */}
              <div className="w-full h-40 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
                <img 
                  className="w-full h-full object-cover" 
                  src={item.image} 
                  alt={item.title} 
                />
              </div>

              {/* 2. Title Tag */}
              <h1 className="text-base font-serif font-semibold text-gray-900 capitalize mt-4  truncate w-full ">
                {item.title}
              </h1>

              {/* 3. Description Tag */}
              <p className="text-sm font-serif font-normal text-gray-900 mt-2  leading-relaxed overflow-hidden line-clamp-4">
                {item.desc}
              </p>

            </div>

          ))}
        </div>

        {/* Right Arrow Circular Button */}
        <button 
          onClick={() => scroll('right')} 
          className="absolute right-[-20px] md:right-[-25px] z-10 w-12 h-12 flex justify-center items-center bg-white border border-gray-200 rounded-full shadow-md hover:bg-gray-50 hover:shadow-lg transition-all active:scale-95"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </div>
    </div>
    </>
  )
}

export default FeatureHero6