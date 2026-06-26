import React from 'react'

const TemplateHero3 = () => {
  const cardsData = [
    { id: 1, title: 'Fresh pasta', img: 'https://images01.nicepagecdn.com/page/53/15/html-template-531588.jpg', },
    { id: 2, title: 'Smart branding is critical today HTML Template', img: 'https://images01.nicepagecdn.com/page/42/68/html-template-42689.jpg' },
    { id: 3, title: 'Architectural direction HTML Template', img: 'https://images01.nicepagecdn.com/page/89/63/html-template-896303.jpg', },
    { id: 4, title: 'Reviews about the design project HTML Template', img: 'https://images01.nicepagecdn.com/page/66/95/html-template-66950.jpg', },
    { id: 5, title: 'Morning ritual HTML Template', img: 'https://images01.nicepagecdn.com/page/85/86/html-template-858637.jpg', },
    { id: 6, title: 'Nature is wonderful HTML Template', img: 'https://images01.nicepagecdn.com/page/95/41/html-template-954163.jpg', },
    { id: 7, title: 'Travel consultant agency HTML Template', img: 'https://images01.nicepagecdn.com/page/31/07/html-template-310793.jpg', },
    { id: 8, title: 'Weight loss challenge Website Template', img: 'https://images01.nicepagecdn.com/page/18/07/website-template-1807177.jpg', },
    { id: 9, title: 'A team of talented people HTML Template', img: 'https://images01.nicepagecdn.com/page/49/64/html-template-496448.jpg', },
 
   
    { id: 10, title: 'Elevated, curated, luxury HTML Template', img: 'https://images01.nicepagecdn.com/page/58/45/html-template-58459.jpg', },
    { id: 11, title: 'We solve your problems HTML Template', img: 'https://images01.nicepagecdn.com/page/30/26/html-template-302675.jpg', },
    { id: 12, title: 'Creative photo HTML Template', img: 'https://images01.nicepagecdn.com/page/10/20/html-template-102065.jpg', },
     { id: 13, title: 'Fresh pasta', img: 'https://images01.nicepagecdn.com/page/53/15/html-template-531588.jpg', },
    { id: 14, title: 'Smart branding is critical today HTML Template', img: 'https://images01.nicepagecdn.com/page/42/68/html-template-42689.jpg' },
    { id: 15, title: 'Architectural direction HTML Template', img: 'https://images01.nicepagecdn.com/page/89/63/html-template-896303.jpg', },
    { id: 16, title: 'Reviews about the design project HTML Template', img: 'https://images01.nicepagecdn.com/page/66/95/html-template-66950.jpg', },
    { id: 17, title: 'Morning ritual HTML Template', img: 'https://images01.nicepagecdn.com/page/85/86/html-template-858637.jpg', },
    { id: 18, title: 'Nature is wonderful HTML Template', img: 'https://images01.nicepagecdn.com/page/95/41/html-template-954163.jpg', },
    { id: 19, title: 'Travel consultant agency HTML Template', img: 'https://images01.nicepagecdn.com/page/31/07/html-template-310793.jpg', },
    { id: 20, title: 'Weight loss challenge Website Template', img: 'https://images01.nicepagecdn.com/page/18/07/website-template-1807177.jpg', },
    { id: 21, title: 'A team of talented people HTML Template', img: 'https://images01.nicepagecdn.com/page/49/64/html-template-496448.jpg', },
 
   
    { id: 22, title: 'Elevated, curated, luxury HTML Template', img: 'https://images01.nicepagecdn.com/page/58/45/html-template-58459.jpg', },
    { id: 23, title: 'We solve your problems HTML Template', img: 'https://images01.nicepagecdn.com/page/30/26/html-template-302675.jpg', },
    { id: 24, title: 'Creative photo HTML Template', img: 'https://images01.nicepagecdn.com/page/10/20/html-template-102065.jpg', },
     { id: 25, title: 'Fresh pasta', img: 'https://images01.nicepagecdn.com/page/53/15/html-template-531588.jpg', },
    { id: 26, title: 'Smart branding is critical today HTML Template', img: 'https://images01.nicepagecdn.com/page/42/68/html-template-42689.jpg' },
    { id: 27, title: 'Architectural direction HTML Template', img: 'https://images01.nicepagecdn.com/page/89/63/html-template-896303.jpg', },
    { id: 28, title: 'Reviews about the design project HTML Template', img: 'https://images01.nicepagecdn.com/page/66/95/html-template-66950.jpg', },
    { id: 29, title: 'Morning ritual HTML Template', img: 'https://images01.nicepagecdn.com/page/85/86/html-template-858637.jpg', },
    { id: 30, title: 'Nature is wonderful HTML Template', img: 'https://images01.nicepagecdn.com/page/95/41/html-template-954163.jpg', },
    { id: 31, title: 'Travel consultant agency HTML Template', img: 'https://images01.nicepagecdn.com/page/31/07/html-template-310793.jpg', },
    { id: 32, title: 'Weight loss challenge Website Template', img: 'https://images01.nicepagecdn.com/page/18/07/website-template-1807177.jpg', },
    { id: 33, title: 'A team of talented people HTML Template', img: 'https://images01.nicepagecdn.com/page/49/64/html-template-496448.jpg', },
 
   
    { id: 34, title: 'Elevated, curated, luxury HTML Template', img: 'https://images01.nicepagecdn.com/page/58/45/html-template-58459.jpg', },
    { id: 35, title: 'We solve your problems HTML Template', img: 'https://images01.nicepagecdn.com/page/30/26/html-template-302675.jpg', },
    { id: 36, title: 'Creative photo HTML Template', img: 'https://images01.nicepagecdn.com/page/10/20/html-template-102065.jpg', },
  
  ];

  return (
    <div className='w-[95%] mx-auto flex flex-col justify-center items-center gap-8'>
      <div className='w-[58%] mx-auto flex flex-col justify-center items-center gap-5'>
      <h1 className='text-3xl font-normal text center '>  Best HTML Website Templates</h1>
      <p className='text-xl font-normal text center '>Select from over 15,000 HTML templates from the portfolio, business, fashion, technology, education, and other trending themes. All templates are fully responsive and available for free.</p>
      </div>
     <div className="p-4 w-full mx-auto">
      <h2 className="text-xl font-bold mb-6 text-center text-gray-800">
        5 Cards Per Row - Dynamic Height Layout
      </h2>
      
      {/* - grid-cols-1: Mobile par 1 card dikhega
        - sm:grid-cols-2: Tablets par 2 cards dikhenge
        - md:grid-cols-3: Medium laptops par 3 cards
        - xl:grid-cols-5: Badi screens (Desktop) par barabar 5 cards ek row mein aayenge
        - gap-3: Cards ke bich ka gap perfect medium rahega
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3">
        {cardsData.map((card) => (
          <div 
            key={card.id} 
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200 h-fit w-full"
          >
            {/* - w-full: Card ki poori width lega (jo grid ne decide ki hai)
              - h-auto: Image apni intrinsic height ke hisab se card ko lamba ya chota karegi
              - object-cover: Image box mein perfectly fit baithegi bina kharab hue
            */}
            <img 
              src={card.img} 
              alt={card.title} 
              className="w-full h-auto object-cover block bg-gray-50" 
              loading="lazy"
            />
            
            <div className="p-3">
              <h3 className="font-semibold text-sm text-gray-800 truncate">{card.title}</h3>
            
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center'>
    <button className='px-6 py-2 bg-[#4399FA] rounded-lg '>next page</button>
      </div>
     
    </div>
    </div>
  )
}

export default TemplateHero3