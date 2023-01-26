import React from 'react'
import FeaturedCard from '../home/featured/FeaturedCard'
import Back from '../common/Back'
import img from '../images/4.jpg'
import "../home/featured/Featured.css"

const Services = () => {
  return (
    <>
    <section className='services mb'>
      <Back name='Services' title='Services -All Services' cover={img} />
      <div className='featured container'>
        <FeaturedCard />
      </div>
    </section>
  </>
  )
}

export default Services
