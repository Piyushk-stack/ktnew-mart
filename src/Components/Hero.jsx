import React from 'react'
import Navbar from './Navbar.jsx'
import First from '../pages/First.jsx'
import Second from '../pages/Second.jsx'
import Grocery from '../pages/Grocery.jsx'
import Footer from './Footer.jsx'
import PackagedFood from '../pages/PackagedFood.jsx'

const Hero = () => {
  return (
    <div>
        <Navbar/>
        <First/>.  
        <Second/>
         <Grocery/> 
        <PackagedFood/>
        <Footer/>
    </div>
  )
}

export default Hero
