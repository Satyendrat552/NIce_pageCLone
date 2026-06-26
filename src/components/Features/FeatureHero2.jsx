import React from 'react'

const FeatureHero2 = () => {
  const cardsData = [
    {
      id: 1,
      title: "AI Page Builder",
      description: "Nicepage AI Page Builder is a tool that helps you quickly create a web page by entering a topic. It generates page,",
      image: "https://images04.nicepage.com/feature/6655954/ai-page-builder-small.jpg",
    },
    {
      id: 2,
      title: "AI Page Builder",
      description: "Nicepage AI Page Builder is a tool that helps you quickly create a web page by entering a topic. It generates page,",
      image: "https://images04.nicepage.com/feature/6655964/ai-block-builder-small.jpg",
    },
    {
      id: 3,
      title: "AI Page Builder",
      description: "Nicepage AI Page Builder is a tool that helps you quickly create a web page by entering a topic. It generates page,",
      image: "https://images04.nicepage.com/feature/6655966/ai-text-builder-small.jpg",
    },
    {
      id: 4,
      title: "AI Page Builder",
      description: "Nicepage AI Page Builder is a tool that helps you quickly create a web page by entering a topic. It generates page,",
      image: "https://images04.nicepage.com/feature/6655969/ai-personalized-content--small.jpg",
    },
  ]

  return (
    <>
      {/* Top Hero Section */}
      <div className='w-[80%] flex justify-center items-center flex-col mx-auto gap-5'>
        <div className='w-[40vw] h-[50vh] flex justify-center items-center flex-col gap-5'>
          <h1 className='text-3xl text-black capitalize font-semibold'>AI Builders</h1>
          <p className='text-gray-800 text-center'>
            Build websites faster with smart AI tools. Use the AI-powered page builder and block builder to create layouts in minutes, get helpful text suggestions for your content, and protect your forms with an intelligent spam filter.
          </p>
          <button className='px-4 py-2 bg-[#4399FA] text-white capitalize'>learn more</button>
        </div>
      </div>

      {/* Cards Container */}
      <div className='w-[80%] min-h-[30vh] h-auto flex justify-start items-start gap-8  mx-auto p-4 flex-wrap lg:flex-nowrap'>
        {cardsData.map((items) => (
       
          <div key={items.id} className='w-[17vw] h-[17vw]] bg-blue-100 flex-shrink-0 rounded-xl overflow-hidden shadow-xs'>
            <div className='w-full'>
              {/* 🛠️ Image par rounded-t-xl lagaya taaki top corners rounded rahein */}
              <img className='w-full  object-cover rounded-t-xl' src={items.image} alt={items.title} />
            </div>
            <div className='w-full p-3 h-30'>
              <h1 className='text-xl font-serif font-semibold capitalize text-black'>{items.title}</h1>
              <p className='text-sm font-serif font-normal text-black capitalize mt-1'>{items.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default FeatureHero2;