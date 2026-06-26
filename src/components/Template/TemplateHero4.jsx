import React from 'react'

const TemplateHero4 = () => {
   const cardsData = [
  {
    id: 1,
    title: "Accordian",
    imageUrl: "https://images01.nicepagecdn.com/page/23/07/html-template-230739.jpg",
  },
  {
    id: 2,
    title: "Blog Post",
    imageUrl: "https://images01.nicepagecdn.com/page/92/45/html-template-92455.jpg",
  },
  {
    id: 3,
    title: "Video",
    imageUrl: "https://images01.nicepagecdn.com/page/42/68/html-template-42682.jpg",
  },
   {
    id: 4,
    title: "over grid",
    imageUrl: "https://images01.nicepagecdn.com/page/42/49/html-template-42499.jpg",
  },
   {
    id: 5,
    title: "Tiles",
    imageUrl: "https://images01.nicepagecdn.com/page/72/86/html-template-72867.jpg",
  },
  {
    id: 6,
    title: "Testimonials",
    imageUrl: "https://images01.nicepagecdn.com/page/96/14/html-template-96142.jpg",
  },
  {
    id: 7,
    title: "",
    imageUrl: "https://images01.nicepagecdn.com/page/95/49/html-template-95498.jpg",
  },
  {
    id: 8,
    title: "Team",
    imageUrl: "https://images01.nicepagecdn.com/page/80/00/html-template-80008.jpg",
  },
   {
    id: 9,
    title: "FAQ",
    imageUrl: "https://images01.nicepagecdn.com/page/26/57/html-template-265764.jpg",
  },
  {
    id: 10,
    title: "ProductList",
    imageUrl: "https://images01.nicepagecdn.com/page/89/24/html-template-89243.jpg",
  },
   {
    id: 11,
    title: "slider",
    imageUrl: "https://images01.nicepagecdn.com/page/96/54/html-template-96542.jpg",
  },
   {
    id: 12,
    title: "overlap Block",
    imageUrl: "https://images01.nicepagecdn.com/page/69/14/html-template-69144.jpg",
  },
   {
    id: 13,
    title: "modal popup",
    imageUrl: "https://images01.nicepagecdn.com/page/12/37/html-template-123744.jpg",
  },
   {
    id: 14,
    title: "Text Button",
    imageUrl: "https://images01.nicepagecdn.com/page/58/98/html-template-58981.jpg",
  },
   {
    id: 15,
    title: "pricing",
    imageUrl: "https://images01.nicepagecdn.com/page/90/66/html-template-90665.jpg",
  },
];
  return (
    <div className='w-[95%] mx-auto bg-[#F7F7F7] flex flex-col justify-center items-center gap-10'>
      <div className='w-[59%] mx-auto bg-[#F7F7F7] flex flex-col justify-center items-center gap-8 p-4'>
      <h1 className='text-3xl font-serif font-normal'>HTML Block Designs</h1>
      <p className=' text-xl text-center font-serif font-normal'>Meet our unique multi-purpose HTML block templates hand-picked by the professional design team. Modify the design of block templates with our powerful editor, utilizing div tags for better layout structure.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100 min-h-screen">
      {cardsData.map((card) => (
        <div 
          key={card.id} 
          className="relative w-80 h-52 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
        >
          {/* Image */}
          <img 
            src={card.imageUrl} 
            alt={card.title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Overlay with Gradient & Bottom-Aligned Title */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
            <h3 className="text-white text-lg font-semibold tracking-wide drop-shadow-md">
              {card.title}
            </h3>
          </div>
        </div>
      ))}
    </div>

    </div>
  )
}

export default TemplateHero4