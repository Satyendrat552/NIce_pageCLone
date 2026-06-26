import React from 'react'
import Footer from '../Home/Footer';

const DownlaodCards = () => {
  const cardsData = [
    {
      id: 1,
      title: "Desktop Application for Windows",
      image:"https://img.icons8.com/?size=100&id=22989&format=png&color=000000",
      description: `Design Websites and publish online 
      Export to HTML WordPress and Joomla`,
      btnText: "Download for Windows"
    },
    {
      id: 2,
      title: "Desktop Application for Mac OS",
      image:"https://img.icons8.com/?size=100&id=uoRwwh0lz3Jp&format=png&color=000000",
      description: `Design Websites and publish online.
      Export to HTML, WordPress and Joomla`,
      btnText: "Download for Mac"
    },
    {
      id: 3,
      title: "Create Sites Online",
      image:"https://img.icons8.com/?size=100&id=NTsYlUSE7CmD&format=png&color=000000",
      description: `Create, edit, and host websites online.
      Assign your custom domains`,
      btnText: "Start Free Online"
    },
    {
      id: 4,
      title: "WordPress Plugin",
      image:"https://img.icons8.com/?size=100&id=aMLZmDlq6SvC&format=png&color=000000",
      description: `Create and edit WordPress pages.
      Modify Colors, Fonts, ​& Typography.`,
      btnText: "Get Plugin"
    },
    {
      id: 5,
      title: "Joomla Extension",
      image:"https://img.icons8.com/?size=100&id=12274&format=png&color=000000",
      description: `Create and edit WordPress pages.
      Modify Colors, Fonts, ​& Typography.`,
      btnText: "Get Extension"
    }
  ];

  return (
    <>
      <div className='w-full min-h-screen bg-[#FFFFFF] p-4 sm:p-8'>
        {/* Header Section */}
        <div className='w-full text-center pt-4 max-w-4xl mx-auto'>
          <h1 className='text-3xl sm:text-4xl font-serif font-semibold capitalize text-black'>
            Download and install Nicepage
          </h1>
          <p className='text-lg sm:text-xl font-serif font-medium mt-2 text-gray-700'>
            Get access to 15000+ ready-to-use website and block templates with full customization
          </p>
        </div>

        {/* Cards Container */}
        <div className='max-w-7xl mx-auto flex justify-start items-start gap-8 flex-wrap mt-12 px-2'>
          {
            cardsData.map((items) => (
              <div 
                key={items.id} 
                className='w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.34rem)] p-6 border border-gray-200 rounded-xl flex flex-col justify-between items-center text-center shadow-xs hover:shadow-md transition-shadow duration-200 min-h-[380px]'
              >
                {/* Image Container */}
                <div className='w-full flex justify-center mb-4'>
                  <img className='w-16 h-16 object-contain' src={items.image} alt={items.title} />
                </div>

                {/* Text & Button Wrapper */}
                <div className='flex flex-col flex-grow justify-between items-center w-full'>
                  <div>
                    <h2 className='text-xl font-serif font-bold text-gray-800'>{items.title}</h2>
                    <p className='text-sm font-serif text-gray-600 mt-3 whitespace-pre-line leading-relaxed'>
                      {items.description}
                    </p>
                  </div>
                  
                  <button className='w-full text-xl py-3 text-white font-semibold capitalize bg-[#4F80D0] hover:bg-[#3d6cb3] transition-colors mt-6 rounded-md shadow-xs'>
                    {items.btnText}
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {/* Nicepage Software EULA Section */}
      <div className='max-w-7xl mx-auto flex justify-start items-start flex-col gap-2 mt-12 px-4 w-full'>
        <h1 className='text-4xl tracking-normal font-medium font-serif text-black'>Nicepage Software EULA</h1>
        <p className='text-sm font-medium font-serif mt-2 text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, distinctio.</p>
        <hr className="w-full border-t border-gray-200 my-8" /> {/* Section Divider */}
      </div>

      {/* Uninstallation Section */}
      <div className='max-w-7xl mx-auto flex justify-start items-start flex-col gap-2 mt-4 px-4 w-full'>
        <h1 className='text-4xl tracking-normal font-medium font-serif text-black'>Uninstallation</h1>
        <p className='text-sm font-medium font-serif mt-2 text-gray-600 leading-relaxed'>
          If you later decide to remove the program from your computer, you can do so in Windows Settings by opening the "Apps & features" section and clicking the Uninstall button, or on Mac, by uninstalling Nicepage from the Applications folder.
        </p>
        <p className='text-sm font-serif text-gray-600'>You can also uninstall Nicepage from the Windows Start menu.</p>
        <img className='w-[20vw] h-auto mt-5 rounded-md shadow-xs border' src="https://images02.nicepagecdn.com/a122014e1e8cdf24af08f98c/75174b025dab583d92b5bc07/unistall-nicepage.png" alt="Uninstall Guide" />
        <hr className="w-full border-t border-gray-200 my-8" /> {/* Section Divider */}
      </div>

      {/* Questions Section */}
      <div className='max-w-7xl mx-auto flex justify-start items-start flex-col gap-2 mt-4 px-4 w-full mb-16'>
        <h1 className='text-4xl tracking-normal font-medium font-serif text-black'>Have questions about Nicepage?</h1>
        <p className='text-sm font-medium font-serif mt-2 text-gray-600 leading-relaxed'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cumque modi beatae dolores enim veritatis minima nisi vero tempora consequuntur!
        </p>
        <p className='text-lg font-serif font-semibold text-gray-700 mt-2 cursor-pointer hover:underline'>
          How do I create a website with Nicepage?
        </p>
        {/* Aapki lagayi hui custom colored line end mein */}
        <hr className="w-full border-t-1 border-gray-500 my-6" />
        <p className='text-lg font-serif font-semibold text-gray-700 mt-2 cursor-pointer hover:underline'>
         Can I work offline?
        </p>
        {/* Aapki lagayi hui custom colored line end mein */}
        <hr className="w-full border-t-1 border-gray-500 my-6" />
        <p className='text-lg font-serif font-semibold text-gray-700 mt-2 cursor-pointer hover:underline'>
        How do I publish my Nicepage site online?
        </p>
        {/* Aapki lagayi hui custom colored line end mein */}
        <hr className="w-full border-t-1 border-gray-500 my-6" />
        <p className='text-lg font-serif font-semibold text-gray-700 mt-2 cursor-pointer hover:underline'>
        Does Nicepage support responsive design?
        </p>
        {/* Aapki lagayi hui custom colored line end mein */}
        <hr className="w-full border-t-1 border-gray-500 my-6" />
        <p className='text-lg font-serif font-semibold text-gray-700 mt-2 cursor-pointer hover:underline'>
         Is Nicepage free to use?
        </p>
        {/* Aapki lagayi hui custom colored line end mein */}
        <hr className="w-full border-t-1 border-gray-500 my-6" />
        <p className='text-lg font-serif font-semibold text-gray-700 mt-2 cursor-pointer hover:underline'>
         Can I edit existing websites using Nicepage?
        </p>
        {/* Aapki lagayi hui custom colored line end mein */}
        <hr className="w-full border-t-1 border-gray-500 my-6" />
        <p className='text-lg font-serif font-semibold text-gray-700 mt-2 cursor-pointer hover:underline'>
         Is Nicepage beginner-friendly if I don't know how to code?
        </p>
        {/* Aapki lagayi hui custom colored line end mein */}
        <hr className="w-full border-t-1 border-gray-500 my-6" />
             <p className='text-lg font-serif font-semibold text-gray-700 mt-2 cursor-pointer hover:underline'>
        What about custom HTML/CSS or integrations?
        </p>
        {/* Aapki lagayi hui custom colored line end mein */}
        <hr className="w-full border-t-1 border-gray-500 my-6" />
             <p className='text-lg font-serif font-semibold text-gray-700 mt-2 cursor-pointer hover:underline'>
        Yes. Nicepage allows you to export full HTML, CSS, and JavaScript files, so you're free to host your site anywhere and edit the code manually if needed.


        </p>
        {/* Aapki lagayi hui custom colored line end mein */}
        <hr className="w-full border-t-1 border-gray-500 my-6" />
         <p className='text-lg font-serif font-semibold text-gray-700 mt-2 cursor-pointer hover:underline'>
        How can I get support?


        </p>
        {/* Aapki lagayi hui custom colored line end mein */}
        <hr className="w-full border-t-1 border-gray-500 my-6" />
       
      </div>
      <Footer/>
  
    </>
  )
}

export default DownlaodCards;