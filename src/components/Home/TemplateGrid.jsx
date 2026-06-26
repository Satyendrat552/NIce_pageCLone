import React from 'react'

const TemplateGrid = () => {
  const templatesData = [
    { id: 1, title: "Stunning Clean Code For Award-Winning ", img: "https://images01.nicepagecdn.com/page/60/39/website-template-6039305.jpg" },
    { id: 2, title: "Multi-disciplined design practice Website Template", img: "https://images01.nicepagecdn.com/page/60/19/website-template-6019068.jpg" },
    { id: 3, title: "Fastest taxi cars Website Template", img: "https://images01.nicepagecdn.com/page/19/01/website-template-19018.jpg" },
    { id: 4, title: "Real estate agency for people Website Template", img: "https://images01.nicepagecdn.com/page/75/30/website-template-75309.jpg" },
    { id: 5, title: "Free people Website Template", img: "https://images01.nicepagecdn.com/page/20/67/website-template-2067939.jpg" },
    { id: 6, title: "Ski Resort Pricing Website Template", img: "https://images01.nicepagecdn.com/page/64/42/website-template-6442552.jpg" },
    { id: 7, title: "Architecture and interior design agency Website Template", img: "https://images01.nicepagecdn.com/page/23/17/website-template-2317031.jpg" },
    { id: 8, title: "Free people Website Template", img: "https://nicepage.com/st/18342/free-people-website-template" },
    { id: 9, title: "Team coaches Website Template", img: "https://images01.nicepagecdn.com/page/47/82/website-template-4782011.jpg" },
    { id: 10, title: "Content customization Website Template", img: "https://images01.nicepagecdn.com/page/60/07/website-template-6007420.jpg" },
    { id: 11, title: "Content customization Website Template", img: "https://images01.nicepagecdn.com/page/60/07/website-template-6007420.jpg" },
    { id: 12, title: "Content customization Website Template", img: "https://images01.nicepagecdn.com/page/60/07/website-template-6007420.jpg" },
    { id: 13, title: "Content customization Website Template", img: "https://images01.nicepagecdn.com/page/60/07/website-template-6007420.jpg" },
    { id: 14, title: "Content customization Website Template", img: "https://images01.nicepagecdn.com/page/60/07/website-template-6007420.jpg" },
    { id: 15, title: "Content customization Website Template", img: "https://images01.nicepagecdn.com/page/60/07/website-template-6007420.jpg" },
    { id: 16, title: "Content customization Website Template", img: "https://images01.nicepagecdn.com/page/60/07/website-template-6007420.jpg" },
    { id: 17, title: "Content customization Website Template", img: "https://images01.nicepagecdn.com/page/60/07/website-template-6007420.jpg" },
    { id: 18, title: "Content customization Website Template", img: "https://images01.nicepagecdn.com/page/60/07/website-template-6007420.jpg" },
    { id: 19, title: "Content customization Website Template", img: "https://images01.nicepagecdn.com/page/60/07/website-template-6007420.jpg" },
    { id: 20, title: "Content customization Website Template", img: "https://images01.nicepagecdn.com/page/60/07/website-template-6007420.jpg" },
    { id: 21, title: "Content customization Website Template", img: "https://images01.nicepagecdn.com/page/60/07/website-template-6007420.jpg" },
    { id: 22, title: "Content customization Website Template", img: "https://images01.nicepagecdn.com/page/60/07/website-template-6007420.jpg" },
    { id: 23, title: "Content customization Website Template", img: "https://images01.nicepagecdn.com/page/60/07/website-template-6007420.jpg" },
    { id: 24, title: "Content customization Website Template", img: "https://images01.nicepagecdn.com/page/60/07/website-template-6007420.jpg" },
    { id: 25, title: "Content customization Website Template", img: "https://images01.nicepagecdn.com/page/60/07/website-template-6007420.jpg" },
    { id: 26, title: "Content customization Website Template", img: "https://images01.nicepagecdn.com/page/60/07/website-template-6007420.jpg" },
    { id: 27, title: "Content customization Website Template", img: "https://images01.nicepagecdn.com/page/60/07/website-template-6007420.jpg" },
    { id: 28, title: "Content customization Website Template", img: "https://images01.nicepagecdn.com/page/60/07/website-template-6007420.jpg" },
    { id: 29, title: "Content customization Website Template", img: "https://images01.nicepagecdn.com/page/60/07/website-template-6007420.jpg" },
    { id: 30, title: "Content customization Website Template", img: "https://images01.nicepagecdn.com/page/60/07/website-template-6007420.jpg" },
   
    
  ];

  return (
    <>
    <div className='w-full min-h-screen p-4 sm:p-8 bg-[#FFFFFF]'>
      <h1 className='text-5xl text-center font-thin font-serif mb-10 text-black'>
        Best Free Website Builder Templates
      </h1>
      
      {/* 5 Column Custom Masonry Container */}
      <div className='columns-1 sm:columns-2 md:columns-3 xl:columns-5 gap-5 max-w-full mx-auto space-y-5 px-2'>
        
        {/* Array mapping starts here */}
        {templatesData.map((card) => (
          <div 
            key={card.id} 
            className='break-inside-avoid bg-white rounded-md overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 border border-gray-200/50 group cursor-pointer'
          >
            {/* Image Container */}
            <div className='w-full bg-gray-100'>
              <img 
                className='w-full h-auto block' 
                src={card.img} 
                alt={card.title} 
              />
            </div>

            {/* Bottom Content / Title */}
            <div className='p-3 bg-white border-t border-gray-100'>
              <h3 className='text-[13px] font-medium text-gray-700 leading-tight group-hover:text-blue-600 transition-colors'>
                {card.title}
              </h3>
            </div>
          </div>
        ))}
        {/* Array mapping ends here */}

      </div>
     
    </div>
     <div className='w-full flex justify-center items-center flex-col h-[15vw] bg-[#F2F2F2] '>
            <h1 className='text-4xl font-serif font-medium text-black'>Free Download Website Builder Software</h1>
            <p className='text-xl font-serif font-medium text-gray-800 mt-4'>Download Website Template Software today and develop mobile-ready websites that look great on any devices and browsers.</p>
            <button className='text-2xl font-serif font-semibold text-white bg-[#F15048] capitalize px-12 py-3 rounded-md mt-4'>downlaod now</button>
      </div>
      </>
  )
}

export default TemplateGrid