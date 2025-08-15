import React from 'react'
import Navbar from './Navbar'
import First from '../pages/First'
import Second from '../pages/Second'
import Grocery from '../pages/Grocery'

const Hero = () => {
  return (
    <div>
        <Navbar/>
        <First/>
        <Second/>
        <Grocery/>
    </div>
  )
}

export default Hero
