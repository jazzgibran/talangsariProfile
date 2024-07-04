import React from 'react'
import CardComp from './cardComp'
import cardItems from './whyus.json';

function Services() {
  return (
    <section id="services" className="bg-gradient-to-b from-[#012456] via-[#062b5f] to-[#053b88] bg-[#012456]">
      <div className="flex flex-col py-14 items-center px-4 gap-8"> 
        <h2 className='text-3xl font-bold'>KENAPA TALANGSARI FITNESS?</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          {cardItems.map((item, index) => (
            <CardComp
              key={index}
              title={item.title}
              description={item.description}
              longdesc={item.longdesc}
              img={item.img}
              modalWidth={item.width}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
