import React from 'react'
import Navbar from './Navbar'
import First from '../Pages/First'
import Second from '../Pages/Second'
import Grocery from '../Pages/Grocery'

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
