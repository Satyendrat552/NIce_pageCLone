
import React, { useState } from 'react';
import FeatureBtn from './FeatureBtn'

const FeatureHero8 = () => {
  // State to manage expand/collapse
  const [isExpanded, setIsExpanded] = useState(false);

  // 15 Cards ka dummy data (Image, Title, Description)
  const cardsData = [
    { id: 1, title: "Build E-Commerce HTML Site", desc: "You can create the E-Commerce website in Nicepage, export HTML, and upload it to your", image: "https://images04.nicepage.com/feature/5765560/build-e-commerce-html-site-small.jpg" },
    { id: 2, title: "Product Maintenance", desc: "Manage Products for your E-Commerce websites on the Products Panel in the Quick Access Pane. You can add, edit, and delete Products and export", image: "https://images04.nicepage.com/feature/5767913/product-maintenance-small.jpg" },
    { id: 3, title: "Drag & Drop", desc: "Freehand design tool to place elements anywhere seamlessly.", image: "https://images04.nicepage.com/feature/5999891/product-categories-for-nicepage-e-commerce-small.jpg" },
    { id: 4, title: "E-Commerce CMS Plugin", desc: "Use the Nicepage Products in WordPress and Joomla. You have the working Product List", image: "https://images04.nicepage.com/feature/5767957/e-commerce-cms-plugin--small.jpg" },
    { id: 5, title: "Payments Via PayPal", desc: "You can use the new Payment button, supporting Payments via PayPal. You can add to websites", image: "https://images04.nicepage.com/feature/5265892/payments-via-paypal-small.jpg" },
    { id: 6, title: "Payments With Stripe", desc: "You can accept payments via Stripe on your websites created with Nicepage. Connect your", image: "https://images04.nicepage.com/feature/5767909/payments-with-stripe-small.jpg" },
    { id: 7, title: "Shopping Cart", desc: "Shopping Cart for Nicepage E-Commerce You can use the Shopping Cart for your E-", image: "https://images04.nicepage.com/feature/5999890/shopping-cart-small.jpg" },
    { id: 8, title: "Product List Page", desc: "You can use the Product List Page Template to add the Store Page to your E-Commerce", image: "https://images04.nicepage.com/feature/5768028/product-list-page-template-small.png" },
    { id: 9, title: "Product Details Page", desc: "Use the Product Details Page Template to output detailed info about an individual Product", image: "https://images04.nicepage.com/feature/5768075/product-details-page-template-small.jpg" },
    { id: 10, title: "Product Variations", desc: "Product Variations in Nicepage is an element used to add product options such as size,.", image: "https://images04.nicepage.com/feature/6656951/product-variations-element-small.jpg" },
    { id: 11, title: "Shopping Cart Page,", desc: "The Shopping Cart Page Template is the concluding page of any online store. It should", image: "https://images04.nicepage.com/feature/490294/shopping-cart-page-template-small.png" },
    { id: 12, title: "E-Commerce Cards", desc: "Product layouts designed specifically for online store grids.", image: "https://images04.nicepage.com/feature/429377/windows-application-small.jpg" },
    { id: 13, title: "Checkout Page Template", desc: "Design checkout pages for WooCommerce and VirtueMart. Edit the Checkout Page", image: "https://images04.nicepage.com/feature/461192/product-list-element-small.jpg" },
    { id: 14, title: "Product Details Element", desc: "Present the featured Product on your website pages. You can modify the layout and stylize the", image: "https://images04.nicepage.com/feature/461198/product-details-element-small.jpg" },
    { id: 15, title: "Shopping Cart Icon Element", desc: "Add the Shopping Cart icon to your website header, which will show the number of added", image: "https://images04.nicepage.com/feature/461261/shopping-cart-icon-element-small.jpg" },
  ];
  const visibleCards = isExpanded ? cardsData : cardsData.slice(0, 6);
  return (
    <>
    <div className='w-[90%] mx-auto flex justify-center items center flex-col gap-8 '>
   <div className='w-[60%] mx-auto flex justify-center items-center flex-col gap-5 '>
      <h1 className='text-3xl font-semibold '>E-Сommerce</h1>
      <p className='max-w-[690px] text-center'>Start your E-Commerce by editing Products, setting up Elements, and designing Page Templates for your online stores built with Nicepage to sell goods or services instantly. You can make a unique E-Commerce design of an HTML website, a WooCommerce theme, or a VirtueMart template to stand out from your competitors.</p>
      <div>
        <FeatureBtn/>
      </div>
    </div>
    </div>
    <div className='w-[95%] xl:w-[90%] mx-auto mt-14 mb-14 flex flex-col items-center'>
      
      {/* 🛠️ GRID CONTAINER: Desktop par exactly 6 columns rahenge */}
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 transition-all duration-500 ease-in-out'>
        {visibleCards.map((item) => (
          
          /* Medium Sized Card Container */
          <div 
            key={item.id} 
            className="w-full bg-white border border-gray-100 rounded-xl overflow-hidden shadow-xs p-3 transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col min-h-[290px]"
          >
            {/* 1. Image Wrapper */}
            <div className="w-full h-28 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
              <img 
                className="w-full h-full object-cover" 
                src={item.image} 
                alt={item.title} 
              />
            </div>

            {/* 2. Title Container (Medium Size Text) */}
            <h1 className="text-xl font-serif font-bold text-gray-800 capitalize mt-3 text-center truncate w-full">
              {item.title}
            </h1>

            {/* 3. Description Container (Small & Compact for 6 cols) */}
            <p className="text-sm font-serif font-normal text-gray-500 mt-1.5 text-center leading-relaxed overflow-hidden line-clamp-3">
              {item.desc}
            </p>
          </div>

        ))}
      </div>

      {/* 🛠️ ANIMATED ARROW BUTTON SECTION */}
      <div className="mt-10 flex flex-col items-center gap-1">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:shadow-lg hover:text-black active:scale-95 transition-all duration-300 group"
          title={isExpanded ? "Show Less" : "Show More"}
        >
          {/* Arrow SVG: click hone par rotate-180 class automatically isko ulta (upward) kar degi */}
          <svg 
            className={`w-6 h-6 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {/* Helper Text (Optional - design ko premium banane ke liye) */}
        <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-400 mt-1 select-none">
          {isExpanded ? "View Less" : "View All Features"}
        </span>
      </div>

    </div>
    </>
  )
}

export default FeatureHero8