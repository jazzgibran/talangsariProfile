import Image from 'next/image'
import React from 'react'
import GallerySlider from './gallerySlide'
import welcomeItems from './welcomeItems.json';
import downArrow from '../../public/downArrow.svg'

function Welcome() {
  return (
    <section id='welcome' className=" bg-cover bg-center h-screen">
      <div className='w-full -z-10 h-full absolute'>
        <Image
          src="/assets/img/welcome.jpg"
          width={1920}
          height={1080}
          className='w-full h-full object-cover object-bottom'
          alt="welcome bg"
        />
      </div>

      {/* mobile text and cta */}
      <div className="flex md:hidden flex-col w-11/12 mx-auto justify-center h-full text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-wider">TALANGSARI FITNESS</h1>
        <p className="text-justify text-sm font-mont mb-8">Bergabunglah dengan kami hari ini dan jadi bagian dari komunitas yang menghargai kesehatan, kebugaran, dan pertumbuhan pribadi. Bersama-sama, kita dapat mengubah tidak hanya tubuh Anda, tetapi seluruh hidup Anda.</p>
        <div className="text-center flex flex-col">
          <a href="#services" className="px-6 py-3 text-darkblu w-full rounded-3xl bg-yelaccent mr-2 hover:bg-opacity-75 mb-4">GABUNG SEKARANG</a>
          <a href="#about" className="px-6 py-3 w-full rounded-3xl outline outline-1 bg-yelaccent bg-opacity-0 hover:bg-opacity-25 outline-yelaccent">PELAJARI LEBIH BANYAK</a>
        </div>
      </div>

      {/* desktop text, cta andd gallery */}
      <div className="w-10/12 mx-auto md:flex hidden h-full justify-evenly gap-x-10 items-center">
        <div className="flex flex-col w-1/2 justify-center h-full text-white">
          <h1 className=" md:text-5xl lg:text-6xl font-bold mb-4 tracking-wider">TALANGSARI FITNESS</h1>
          <p className="text-justify text-sm font-mont mb-8">Bergabunglah dengan kami hari ini dan jadi bagian dari komunitas yang menghargai kesehatan, kebugaran, dan pertumbuhan pribadi. Bersama-sama, kita dapat mengubah tidak hanya tubuh Anda, tetapi seluruh hidup Anda.</p>
          <div className="flex flex-wrap">
            <a href="#services" className="px-6 py-3 text-darkblu rounded-3xl bg-yelaccent mr-2 hover:bg-opacity-75 mb-4">GABUNG SEKARANG</a>
            <a href="#about" className="px-6 py-3 h-fit rounded-3xl outline outline-1 bg-yelaccent bg-opacity-0 hover:bg-opacity-25 outline-yelaccent">PELAJARI LEBIH BANYAK</a>
          </div>
        </div>
        <div className='w-1/2'>
          <GallerySlider imageItems={welcomeItems} />
        </div>
      </div>

      <a href="#about"><Image
        className='absolute animate-bounce bottom-0 mx-auto left-0 right-0'
        width={60}
        height={60}
        src={downArrow}
        alt="Follow us on Twitter"
      /></a>
    </section>
  )
}

export default Welcome
