import React from 'react'
import Navbar from './Navbar.jsx'
import First from '../Pages/First.jsx'
import Second from '../Pages/Second.jsx'
import Grocery from '../Pages/Grocery.jsx'

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
