import React from 'react'

const Herosix = () => {
  return (
    <div className='w-full bg-[#FFFFFF] flex flex-col items-center pt-[25vw] overflow-hidden'>

      {/* Heading */}
      <div className='w-full text-center -translate-y-[18vw]'>
        <h1 className='text-4xl font-serif font-bold capitalize'>
          Perfect Results On Any Device
        </h1>

        <p className='text-xl font-serif font-medium text-gray-700 mt-2'>
          Web pages are absolutely mobile-friendly and look perfect in all device views
        </p>
      </div>

      {/* Devices Image */}
      <div className='w-full flex justify-center items-center -translate-y-[15vw]'>
        <img
          src="https://images03.nicepagecdn.com/a122014e1e8cdf24af08f98c/fb90ccdaadcc586c9725846b/devicesopt.jpg"
          alt=""
        />
      </div>

      {/* Blue Section */}
      <div className='w-full flex justify-between items-center gap-5 h-[80vh] -translate-y-[13vw] bg-[#0F2557] p-4'>

        <img
          className='-translate-y-[12vw] translate-x-[11vw] w-[25vw] h-[25vw] object-cover'
          src="https://images03.nicepagecdn.com/a122014e1e8cdf24af08f98c/a1cbceea08ad544995f1d163/testimonialresult.jpg"
          alt=""
        />

        <div>
          <p className='text-3xl text-white font-serif leading-relaxed'>
            Nicepage is a must-have tool <br />
            for any webmaster. It’s like a <br />
            real assistant, but works 100 <br />
            times faster.
          </p>

          <h1 className='text-xl text-white font-serif font-semibold mt-4'>
            Alan Hollander
          </h1>

          <p className='text-xl text-white font-serif capitalize'>
            Web Designer
          </p>
        </div>

        <div className='-translate-y-[1vw] -translate-x-[10vw]'>
          <img
            className='w-[20vw] h-[20vw] -translate-y-[8vw] translate-x-[2vw]'
            src="https://images03.nicepagecdn.com/a122014e1e8cdf24af08f98c/7003df2549465e48bf1a4149/b2.png"
            alt=""
          />

          <h1 className='text-4xl font-serif font-semibold text-white'>
            More happy <br />
            customers
          </h1>

          <p className='text-2xl font-serif text-white mt-2'>
            Create modern sites and get <br />
            more customers
          </p>
        </div>

      </div>

      {/* Download Section */}
      <div className='w-full py-10 text-center bg-[#F2F2F2] -mt-[13vw] relative z-10'>
        <h1 className='text-4xl font-serif capitalize'>
          Free Website Builder Download
        </h1>

        <p className='text-xl text-gray-600 font-serif mt-5 capitalize'>
          Download Free Website Design Software today and develop mobile-ready
          websites that look great on any devices and browsers.
        </p>

        <button className='px-[5vw] py-3 text-2xl font-bold tracking-wide bg-[#F15048] mt-5 capitalize text-white rounded-md hover:bg-[#d93f37] transition'>
          Download Now
        </button>
      </div>

    </div>
  )
}

export default Herosix