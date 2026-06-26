import React from 'react'
import TemplateHero1 from "../components/Template/TemplateHero1"
import TemplateHero2 from "../components/Template/TemplateHero2"
import TemplateHero3 from "../components/Template/TemplateHero3"
import TemplateHero4 from "../components/Template/TemplateHero4"
import Footer from "../components/Home/Footer"

const Templates = () => {
  return (
    <div className='w-full bg-[#FFFFFF]'>
    <section className='w-full min-h-screen mt-10'>
    <TemplateHero1/>
    </section>
      <section className='w-full min-h-screen -mt-[10vw]'>
    <TemplateHero2/>
    </section>
     <section className='w-full min-h-screen -mt-[10vw]'>
    <TemplateHero3/>
    </section>
     <section className='w-full min-h-screen mt-5'>
    <TemplateHero4/>
    </section>
     <section className='w-full  mt-5'>
    <Footer/>
    </section>
    </div>
  )
}

export default Templates