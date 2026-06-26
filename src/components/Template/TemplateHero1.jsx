import React, { useRef } from 'react'
// Agar scroll buttons ke liye icons lagane hain (Optional)
import { ChevronLeft, ChevronRight } from 'lucide-react'
// ERROR FIX: Search icon ko import kiya taaki code crash na ho
import { Search } from 'lucide-react'

const TemplateHero1 = () => {
  const scrollRef = useRef(null)

  // Buttons se manually scroll karne ke liye functions
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo = direction === 'left' 
        ? scrollLeft - 200 
        : scrollLeft + 200
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  // Bohot saare links ka data
  const links = [
    "All Templates", "HTML5", "CSS3", "React Templates", "Tailwind UI", 
    "E-commerce", "Portfolio", "Landing Page", "Admin Dashboard", 
    "Blogs", "Corporate", "Medical", "Education", "Fitness", "Real Estate"
  ]
  return (
    <>
   
    <div className='w-full overflow-x-hidden '> 
      <div className='w-[95%] h-[55vh] flex justify-center items-center bg-[#53A865] mx-auto relative overflow-hidden rounded-lg'>
        
        {/* CENTER CONTENT AREA */}
        <div className='w-[50%] flex justify-center items-center flex-col gap-8'>
          <h1 className='text-4xl font-semibold text-white'>15,000+ Free HTML Templates</h1>
          
          {/* SEARCH BAR CONTAINER */}
          <div className='relative w-[35vw] flex items-center bg-white rounded-md overflow-hidden'>
            {/* Input box */}
            <input 
              className='w-full p-3 pr-14 text-sm outline-none text-black' 
              type="search" 
              placeholder='enter keywords' 
            />
            {/* Solid Search Button */}
            <button 
              className='absolute right-0 top-0 bottom-0 px-4 bg-[#F0F0F0] text-gray-700 font-bold hover:bg-[#ffffff] transition-colors flex items-center justify-center'
              aria-label="Search"
            >
              <Search size={18} strokeWidth={3} />
            </button>
          </div>
          
          <p className='text-sm text-white text-center w-[39vw]'>
         Download the best free HTML templates, designed to support various tags and structures for enhanced functionality. These basic and simple HTML templates are fully responsive, customizable, and easy to use with a drag-and-drop HTML website builder.
          </p>
        </div>
        
        {/* IMAGES AREA (Bina design ya position badle typos fix kiye) */}
        <img className='absolute top-[18vw] -right-[18vw] w-[35vw] h-[15vw] object-cover rotate-45' src="https://images.pexels.com/photos/4067117/pexels-photo-4067117.jpeg" alt="" />
        <img className='absolute -top-1 -right-[16vw] w-[35vw] h-[15vw] object-cover rotate-12' src="https://images.pexels.com/photos/8572605/pexels-photo-8572605.jpeg" alt="" />
        <img className='absolute -top-20 -left-[21vw] w-[35vw] h-[15vw] object-cover rotate-12' src="https://images.pexels.com/photos/29090100/pexels-photo-29090100.jpeg" alt="" />
        <img className='absolute top-[15vw] -left-[18vw] w-[35vw] h-[15vw] object-cover -rotate-12' src="https://images.pexels.com/photos/6143826/pexels-photo-6143826.jpeg" alt="" />
        
      </div>
    </div>
    <div className='w-[95%] mx-auto my-4 relative flex items-center group'>
      
      {/* Left Scroll Button (Sirf hover par dikhega) */}
      <button 
        onClick={() => scroll('left')}
        className='absolute left-0 z-10 p-2 bg-white/90 shadow-md rounded-full text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center border'
      >
        <ChevronLeft size={20} strokeWidth={2.5} />
      </button>

      {/* HORIZONTAL SCROLLABLE CONTAINER */}
      <div 
        ref={scrollRef}
        className='w-full flex items-center gap-3 overflow-x-auto whitespace-nowrap scrollbar-none py-2 px-1'
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Firefox aur IE se scrollbar chhupane ke liye
      >
        {links.map((link, index) => (
          <a 
            key={index} 
            href={`#${link.toLowerCase().replace(" ", "-")}`}
            className='inline-block px-4 py-2 text-sm font-medium bg-gray-100 hover:bg-[#53A865] hover:text-white text-gray-700 rounded-md transition-all duration-200 cursor-pointer shadow-sm border border-gray-200/50'
          >
            {link}
          </a>
        ))}
      </div>

      {/* Right Scroll Button (Sirf hover par dikhega) */}
      <button 
        onClick={() => scroll('right')}
        className='absolute right-0 z-10 p-2 bg-white/90 shadow-md rounded-full text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center border'
      >
        <ChevronRight size={20} strokeWidth={2.5} />
      </button>

    </div>
    
    </>
  )
}

export default TemplateHero1