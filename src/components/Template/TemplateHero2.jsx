import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TemplateHero2 = () => {
  const scrollContainerRef = useRef(null);

  // Fake Data: Aap isko apne real data se replace kar sakte hain
  const cardsData = [
    { id: 1, title: "Interior", image: "https://images01.nicepagecdn.com/page/23/29/html-template-23291.jpg" },
    { id: 2, title: "sale", image: "https://images01.nicepagecdn.com/page/83/73/html-template-83730.jpg" },
    { id: 3, title: "real state", image: "https://images01.nicepagecdn.com/page/29/64/html-template-29649.jpg" },
    { id: 4, title: "medicine & science", image: "https://images01.nicepagecdn.com/page/29/40/html-template-29405.jpg" },
    { id: 5, title: "pets & Animals", image: "https://images01.nicepagecdn.com/page/14/60/html-template-14604.jpg" },
    { id: 6, title: "Travel & Hotels", image: "https://images01.nicepagecdn.com/page/24/59/html-template-24595.jpg" },
    { id: 7, title: "Wedding", image: "https://images01.nicepagecdn.com/page/31/32/html-template-31323.jpg" },
    { id: 8, title: "Architecture & Building", image: "https://images01.nicepagecdn.com/page/48/82/html-template-48825.jpg" },
    { id: 9, title: "Technology", image: "https://images01.nicepagecdn.com/page/66/14/html-template-66149.jpg" },
    { id: 10, title: "Nature", image: "https://images01.nicepagecdn.com/page/17/05/html-template-17055.jpg" },
    { id: 11, title: "Education", image: "https://images01.nicepagecdn.com/page/29/47/html-template-29476.jpg" },
    { id: 12, title: "food & restaurant", image: "https://images01.nicepagecdn.com/page/87/43/html-template-87432.jpg" },
    { id: 13, title: "Art & design", image: "https://images01.nicepagecdn.com/page/23/07/html-template-23071.jpg" },
    { id: 14, title: "Business & law", image: "https://images01.nicepagecdn.com/page/96/73/html-template-96735.jpg" },
    { id: 15, title: "sports", image: "https://images01.nicepagecdn.com/page/88/77/html-template-88779.jpg" },
    { id: 15, title: "fashion & Beauty", image: "https://images01.nicepagecdn.com/page/25/12/html-template-25122.jpg" },
    { id: 15, title: "Industrial", image: "https://images01.nicepagecdn.com/page/60/52/html-template-60525.jpg" },
    { id: 15, title: "cars & transportation", image: "https://images01.nicepagecdn.com/page/19/50/html-template-19500.jpg" },
    { id: 15, title: "Music & entertainment", image: "https://images01.nicepagecdn.com/page/19/53/html-template-19530.jpg" },
  ];
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      
      // Ek baar me kitna scroll hona chahiye (adjust according to your card width)
      const scrollAmount = clientWidth * 0.75; 

      if (direction === 'left') {
        scrollContainerRef.current.scrollTo({
          left: scrollLeft - scrollAmount,
          behavior: 'smooth', // Smooth animation ke liye
        });
      } else {
        scrollContainerRef.current.scrollTo({
          left: scrollLeft + scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };
  return (
    <div className='w-[95%] mx-auto flex justify-center items-center flex-col'>
      <div className='w-[55%] mx-auto flex justify-center items-center flex-col gap-5'>
        <h1 className='text-3xl text-center font-serif font-noraml'>Popular HTML Template Categories</h1>
        <p className='text-xl text-center font-serif font-noraml'>Choose the best HTML templates and use our visual template editor to add and modify the content with no coding. The design of any page template looks great on all modern devices</p>
      </div>
      <div className="relative w-full max-w-6xl mx-auto px-4 py-8 group">
      
      {/* Left Arrow Button */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-all opacity-0 group-hover:opacity-100 duration-300"
        aria-label="Scroll Left"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      {/* Cards Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 px-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Scrollbar hide karne ke liye inline style
      >
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="flex-shrink-0 w-[280px] bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-4 flex flex-col gap-3"
          >
            {/* H1 Upar */}
            <h1 className="text-xl font-semibold text-gray-800 truncate">
              {card.title}
            </h1>
            
            {/* Image Neeche */}
            <div className="w-full h-[180px] overflow-hidden rounded-lg">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow Button */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-all opacity-0 group-hover:opacity-100 duration-300"
        aria-label="Scroll Right"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

    </div>
    </div>
  )
}

export default TemplateHero2