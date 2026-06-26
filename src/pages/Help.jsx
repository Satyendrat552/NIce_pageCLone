import React from 'react'
import HelpHero1 from '../components/Help/HelpHero1'
import Footer from "../components/Home/Footer"

const Help = () => {
  const cardData = [
    { id: 1, title: "introduction", image: "https://img.youtube.com/vi/7ZeKBHeuRE8/mqdefault.jpg" },
    { id: 2, title: "Install and Build First Site", image: "https://img.youtube.com/vi/v26sb6ijWL8/mqdefault.jpg" },
    { id: 3, title: "Make A Website With Hosting", image: "https://img.youtube.com/vi/NS0J_8dnk7g/mqdefault.jpg" },
    { id: 4, title: "Add Pages, Blocks & Elements", image: "https://img.youtube.com/vi/wY-XsStjpUA/mqdefault.jpg" },
    { id: 5, title: "How to Build Sites WIth AI", image: "https://img.youtube.com/vi/aTI_YfANShQ/mqdefault.jpg" },
    { id: 6, title: "Build E-Commerce Websites", image: "https://img.youtube.com/vi/P-n_3vRJpVw/mqdefault.jpg" },
    { id: 7, title: "Connect a Custom Domain", image: "https://img.youtube.com/vi/RqU2Jynr5_U/mqdefault.jpg" },
    { id: 8, title: "Google Recaptcha", image: "https://img.youtube.com/vi/qEESaaXKnRQ/mqdefault.jpg" },
    { id: 9, title: "Cookie Consent Popup", image: "https://img.youtube.com/vi/g3xDqe3VX0Q/mqdefault.jpg" },
    { id: 10, title: "Website Animation", image: "https://img.youtube.com/vi/AuOUS-mMqEE/mqdefault.jpg" },
    { id: 11, title: "Calendar Booking", image: "https://img.youtube.com/vi/ccPiRY6Khi0/mqdefault.jpg" },
    { id: 12, title: "Sitemap For Better SEO", image: "https://img.youtube.com/vi/bVEb1YP3KZk/mqdefault.jpg" },
    { id: 13, title: "Multi-Language Websites", image: "https://img.youtube.com/vi/9YK_tP46uSA/mqdefault.jpg" },
    { id: 14, title: "Boost Sales With An Online Store", image: "https://img.youtube.com/vi/pzybofxJi58/mqdefault.jpg" },
  ];

  return (
    <>
    <div className='w-full min-h-screen bg-gray-50 p-6'>
      <h1 className = "text-4xl ml-5 capitalize font-semibold">video tutorial</h1>
      <h2 className = "text-2xl ml-5 capitalize font-semibold mt-10">Getting Started With Nicepage</h2>
      {/* Grid Container wrapper yahan hona chahiye */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-[1440px] mx-auto ">
        
        {cardData.map((item) => (
          // key prop hamesha map ke immediate child par honi chahiye
          <HelpHero1 item={item} key={item.id} />
        ))}

      </div>
    
    </div>
    <Footer/>
    </>
  )
}

export default Help