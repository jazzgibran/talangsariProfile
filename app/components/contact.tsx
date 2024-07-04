import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faSquareWhatsapp, faInstagramSquare, } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <section id="contact" className="py-16 font-mont bg-[#053b88]">
      <div className="">
        <h2 className="text-3xl text-center font-bold mb-4">HUBUNGI KAMI</h2>

        <div className="flex flex-col items-center gap-6 justify-center md:flex-row w-10/12 mx-auto ">

          <div className="md:w-1/3 flex flex-col items-center">
            <h3 className="text-lg md:text-2xl font-semibold mb-2"><FontAwesomeIcon icon={faMapMarkerAlt} /> Location</h3>
            <p className='text-center flex gap-1 flex-col'>Perumahan Talangsari Regency Blok A3/28 RT029, Samarinda</p>
            {/* Embed Google Map here */}
          </div>

          <div className="md:w-1/3 flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/talang.da" className="text-2xl md:text-3xl"><FontAwesomeIcon icon={faFacebookSquare} /></a>
              <a href="https://www.instagram.com/talangsarifitnesssamarinda" className="text-2xl md:text-3xl"><FontAwesomeIcon icon={faInstagramSquare} /></a>
              <a href="https://wa.link/mwngy4" className="text-2xl md:text-3xl"><FontAwesomeIcon icon={faSquareWhatsapp} /></a>
            </div>
          </div>

          <div className='md:w-1/3 flex flex-col items-center'>
            <h3 className="text-xl md:text-2xl font-semibold mb-2"><FontAwesomeIcon icon={faClock} /> Operating Hours</h3>
            <div className="">
              <p>Hari Kerja 07:00-22:00</p>
              <p>Hari Sabtu 07:00-18:00</p>
              <p>Hari Minggu 07:00-13:00</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
