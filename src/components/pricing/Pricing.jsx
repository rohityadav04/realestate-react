import React from 'react'
import Back from '../common/Back'
import PriceCard from '../home/price/PriceCard'
import "../home/price/price.css"
import img from "../images/pricing.jpg"

const Pricing = () => {
  return (
    <>
      <section className='pricing mb'>
        <Back name='30 days money back guarantee' title='No Extra Fees. Friendly Support' cover={img} />
        <div className='price container'>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Pricing
