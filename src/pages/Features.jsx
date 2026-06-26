import React from 'react'
import FeatureHero1 from '../components/Features/FeatureHero1'
import FeatureHero2 from '../components/Features/FeatureHero2'
import FeatureHero3 from '../components/Features/FeatureHero3'
import FeatureHero4 from '../components/Features/FeatureHero4'
import FeatureHero5 from '../components/Features/FeatureHero5'
import FeatureHero6 from '../components/Features/FeatureHero6'
import FeatureHero7 from '../components/Features/FeatureHero7'
import FeatureHero8 from '../components/Features/FeatureHero8'
import FeatureHero9 from '../components/Features/FeatureHero9'
import Footer from '../components/Home/Footer'

const Features = () => {
  return (
    <div className='w-full bg-white'>
      <section className='w-full mt-10'>
        <FeatureHero1/>
      </section>
      
      <section className='w-full min-h-screen mt-2'>
        <FeatureHero2/>
      </section>
      
      <section className='w-full min-h-screen mt-2'>
        <FeatureHero3/>
      </section>
      
      <section className='w-full min-h-screen mt-2'>
        <FeatureHero4/>
      </section>
      
      <section className='w-full min-h-screen mt-2'>
        <FeatureHero5/>
      </section>
      
      <section className='w-full min-h-screen mt-2'>
        <FeatureHero6/>
      </section>
      
      <section className='w-full min-h-screen mt-2'>
        <FeatureHero7/>
      </section>
      
      <section className='w-full min-h-screen mt-2'>
        <FeatureHero8/>
      </section>
      
      <section className='w-full min-h-screen mt-2'>
        <FeatureHero9/>
      </section>
      
      {/* 🛠️ FIX: Footer se min-h-screen hata diya hai taaki ye apni natural height le */}
      <footer className='w-full mt-10'>
        <Footer/>
      </footer>
    </div>
  )
}

export default Features