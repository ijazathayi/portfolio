import React from 'react'
import '../css/body.css'
import img1 from '../assets/non-bg.png'
import Loader from './Loader'
import Card from './Projects'
import Navbar from './Navbar'
import About from './About'
import Contact from './Contact'
import Resume from './Resume'

function Body() {
  return (
    <div id='body'>
      <div className="grid">
        <div className="grid-item grid1" id='grid-1-1'>
          <span id='intro1'>hi, im</span>
          <span id='intro2'> mohammed ijaz</span>
          <Loader />
        </div>
        <div className="grid-item grid1" id='grid-1-2'>
          <div id='image'>
            <img src={img1} alt="" id='img' />
          </div>
        </div>
      </div>
      <Navbar />
      <About />
      <Resume />
      <Card />
      <Contact />

    </div>
  )
}

export default Body

