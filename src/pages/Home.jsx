import React from 'react'
import HeroOne from '../components/Home/HeroOne'
import HeroTwo from '../components/Home/HeroTwo'
import Herothree from '../components/Home/Herothree'
import Herofour from '../components/Home/Herofour'
import HeroFive from '../components/Home/HeroFive'
import Herosix from '../components/Home/Herosix'
import TemplateGrid from '../components/Home/TemplateGrid'
import Footer from '../components/Home/Footer'

const Home = () => {
  return (
    <div className="w-full bg-[#17182A]">
      
      {/* Hero Section */}
      <section className="relative min-h-[130vh] overflow-hidden">
  <HeroOne style="absolute left-40 top-20" />
</section>

      {/* Second Section */}
      <section className="min-h-screen">
        <HeroTwo />
      </section>
        {/* third Section */}
       <section className="min-h-screen">
        <Herothree/>
      </section>
       {/*   fourth Section */}
       <section className="min-h-screen">
        <Herofour/>
      </section>
        {/*   fifth Section */}
       <section className="min-h-screen">
        <HeroFive/>
      </section>
     <section className='w-full'>
  <Herosix />
</section>
  <section className='w-full'>
  <Herosix />
</section>
<section className='w-full'>
  <TemplateGrid />
</section>
<section className='w-full'>
  <Footer />
</section>
      

    </div>
  )
}

export default Home