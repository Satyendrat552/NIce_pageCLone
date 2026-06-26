import React from 'react'
import Blogs from '../components/Blog/Blogs'
import BlogBtn from '../components/Blog/BlogBtn'
import Footer from "../components/Home/Footer"

const Blog = () => {
   const cardsdata = [
    {id:1,
      date:"June 17, 2026",
      title:"Why Your Contact Form May Stop Working? Common Submission Issues",
      description:"Forms are often one of the most important parts of a website. In this article, we discuss Nicepage forms that use Nicepage servers for submission processing, such as the Email and Google Sheets submission options. This article covers the most common form submission problems and how to fix them.",
      image:"https://resources.nicepage.com/962/164962/contact-form-issues.jpg"
    },
     {id:2,
      date:"February 27, 2026",
      title:"Nicepage 8.3: User Roles And Access To Leads",
      description:"We're happy to present the Nicepage 8.3 update with User Roles and Access to Leads, co-working on websites, Search Options on Add Panel, and more.",
      image:"https://resources.nicepage.com/833/161833/user-roles-leads.jpg"
    },
     {id:3,
      date:"February 12, 2026",
      title:"Responsive Design in Website Builders: What Actually Matters",
      description:"Website builders promise a rapid start thanks to preconfigured styles and CSS templates, but a proper responsive layout still requires manual logic. You need to define where to place the breakpoints, how to rebuild the columns, and check the mobile UX. Let's figure out how to implement the responsive design properly right inside the builders.",
      image:"https://resources.nicepage.com/359/161359/responsive-web-design.jpg"
    },
     {id:4,
      date:"January 22, 2026",
      title:"Nicepage 8.2: Visual Gradient Editor",
      description:"We're pleased to announce the release of Nicepage 8.2, introducing the Visual Gradient Editor, enhanced Site Transfer, and much more.",
      image:"https://resources.nicepage.com/819/160819/visual-gradient-editor.jpg"
    },
     {id:5,
      date:"December 16, 2025",
      title:"Nicepage 8.1: Joomla 6 Is Now Supported!",
      description:"We’re excited to announce the release of Nicepage 8.1, featuring support for Joomla 6, an improved Site Transfer feature, the Notifications Tab in Site Settings, Gradient Types and Stops, and more.",
      image:"https://resources.nicepage.com/970/159970/joomla-6-support.jpg"
    },
    {id:6,
      date:"November 14, 2025",
      title:"Nicepage 8 Released!",
      description:"We are proud to announce the launch of Nicepage 8.0, marking another milestone in our journey! This update includes the website transfer for Nicepage Online, Sale Countdown, Sale Option, and additional features.",
      image:"https://resources.nicepage.com/758/158758/site-transfer.jpg"
    },
    {id:7,
      date:"October 31, 2025",
      title:"Nicepage 7.15: E-Commerce Improvements",
      description:"We’re thrilled to introduce the release of Nicepage 7.15, the latest update packed with new features and e-commerce improvements, including product image enhancements, tabs for the Sticky Header option, and more.",
      image:"https://resources.nicepage.com/757/158757/products-image-slider.jpg"
    },
    {id:8,
      date:"June 17, 2026",
      title:"Nicepage 7.14: Improved CSS For SEO. Navigation Menu Icons",
      description:"We’re excited to announce the release of the new Nicepage 7.14 update, which includes improved CSS for SEO, navigation menu icons, Product Variations in Product List, and more.",
      image:"https://resources.nicepage.com/756/158756/menu-icons.jpg"
    },
  ]
  return (
    <>
    <div className='w-full bg-[#FFFFFF] flex flex-col justify-center items-center gap-10 '>
     <div className=' w-[50%] flex flex-col justify-center items-center gap-10 '>
      <h1 className='text-6xl mt-10 '>Nicepage Blog</h1>
      <p className='text-normal text-center '>Discover the latest web design trends, simple tutorials, and updates about our website builder. Find easy tips, fresh ideas, and inspiration to help you create modern and responsive websites.</p>
     </div>
     <div className='w-[70%] h-[40vh] bg-[#FFFFFF] shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5'>
      <p>June 24, 2026</p>
      <h1 className='text-2xl font-semibold mt-3'>How to Use AI In Nicepage Effectively</h1>
      <p className='text-ls mt-5'>Artificial intelligence has quickly become one of the most discussed features in website builders. It helps speed up content creation, generate layouts, and simplify the first steps of building a website. This guide explains the most common AI-related issues in Nicepage and how to get better results.</p>
      <BlogBtn/>
     </div>
     {cardsdata.map((item)=>(
      <Blogs key={item.id} item = {item}/>
     ))}
    </div>
    <div className='mt-10'>
      <Footer/>
    </div>
    
    </>
  )
}

export default Blog