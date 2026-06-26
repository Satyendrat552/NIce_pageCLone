import React from 'react'
import FeatureBtn from './FeatureBtn'

const FeatureHero7 = () => {
  const cardsData = [
    {
      id: 1,
      title: "Contact Form Presets",
      desc: "Apply form presets, adding blocks with the most popular forms in a click. You can add a contact, subscription, and",
      image: "https://images04.nicepage.com/feature/459199/contact-form-presets-small.png"
    },
    {
      id: 2,
      title: "Move Contact Form fields",
      desc: "You can easily change the position of the form inputs and other elements by dragging and dropping them into the",
      video: "https://images04.nicepage.com/feature/460430/move-contact-form-fields-small.mp4"
    },
    {
      id: 3,
      title: "Contact Form Field Types",
      desc: "Contact Form Field Types Select from more than 10 form field types while building your Forms, including input, text area, radio button, selection, and all other popular used on the modern forms.",
      image: "https://images04.nicepage.com/feature/459207/contact-form-field-types-small.png"
    },
    {
      id: 4,
      title: "Form Input Styling",
      desc: "The Form Inputs can have various Styling, and now it is popular to have inputs only with the Bottom Border marking the Input Field. You can stylize the Font, Fill, Border, and more for the Contact Form Element added to a Web Page. Select a Form then in the Property Panel click on the Input Style link. Change the look of the Form Inputs previewing your changes in the Editor.",
      image: "https://images04.nicepage.com/feature/1342681/form-input-styling-small.jpg"
    },
    {
      id: 5,
      title: "Contact Form Layout",
      desc: "You can easily change the Layout of the Contact Form from placing form inputs and fields from vertical to horizontal and vice versa. Select the Contact Form, go to the Property Panel, and find the Layout section. Click the Layout icons to place inputs in a row or one under another on a web page.",
      video: "https://images04.nicepage.com/feature/1328734/contact-form-layout-small.mp4"
    }
  ];

  return (
    <>
      {/* Upper Hero Section */}
      <div className='w-[90%] mx-auto flex justify-center items-center flex-col gap-8 '>
        <div className='w-[52%] mx-auto flex justify-center items-center flex-col text-center gap-5 '>
          <h1 className='text-4xl font-semibold text-gray-900'>Contact Form Builder</h1>
          <p className='text-normal font-normal text-gray-700'>
            Build contact forms with the best free website creator. With no coding required, it is easy to create forms for collecting feedback, leads, or data for mailing lists, registrations, and sign-ups on your website. You can create custom contact forms in minutes with drag and drop, customize them visually, and instantly preview them in all responsive modes for mobile devices.
          </p>
          <div className='mt-2'>
            <FeatureBtn />
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className='w-[80%] xl:w-[75%] mx-auto mt-14 mb-10'>
        
        {/* 🛠️ GRID CONTAINER: 4 columns maintain hain, 5va card automatic 1st card ke neeche left-align ho jayega */}
        <div className='w-full grid grid-cols-4 gap-6'>
          {cardsData.map((item) => (
            
            <div 
              key={item.id} 
              className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs p-3 transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col min-h-[320px]"
            >
              
              {/* Media Container (🛠️ FIX: Video aur Image dono ko check karke render karega) */}
              <div className="w-full h-36 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
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
              <h1 className="text-xl font-bold text-gray-800 capitalize mt-4 text-center truncate w-full">
                {item.title}
              </h1>

              {/* Description Container */}
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

export default FeatureHero7;