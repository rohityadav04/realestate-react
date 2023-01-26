import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../about/About'
import Blog from '../blog/Blog'
import Footer from '../common/footer/Footer'
import Header from '../common/header/Header'
import Contact from '../contact/Contact'
import Home from '../home/Home'
import Pricing from '../pricing/Pricing'
import Services from '../services/Services'


const Pages = () => {
  return (
    <>
      <Header/>
      <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/about" element={<About/>}/>
   <Route path="/services" element={<Services/>}/>
   <Route path="/blog" element={<Blog/>}/>
   <Route path="/pricing" element={<Pricing/>}/>
   <Route path="/contact" element={<Contact/>}/>
   
      </Routes>
      <Footer/>

    </>
  )
}

export default Pages
