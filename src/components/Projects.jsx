import React from 'react'
import '../css/projects.css'
import Marquee from "react-fast-marquee";

const Projects = () => {
  return (
    <div id='project-body'>
      
      <span id='pro-int-1' >MY </span>
      <span id='pro-int'>Projects</span>
      <Marquee>
        <div id="book-wrapper"><div className="book">
          <p id='book-content'>Hello </p>
          <div className="cover">
            <p id='book-content'>LOGIN-1</p>
          </div>
        </div>
        </div>

        <div id="book-wrapper"><div className="book">
          <p id='book-content'>Hello</p>
          <div className="cover">
            <p id='book-content'>LOGIN-2</p>
          </div>
        </div>
        </div>
        <div id="book-wrapper"><div className="book">
          <p id='book-content'>Hello</p>
          <div className="cover">
            <p id='book-content'>STREAM TUNES</p>
          </div>
        </div>
        </div>
        <div id="book-wrapper"><div className="book">
          <p id='book-content'>Hello</p>
          <div className="cover">
            <p id='book-content'>PIANO</p>
          </div>
        </div>
        </div>
        <div id="book-wrapper"><div className="book">
          <p id='book-content'>Hello</p>
          <div className="cover">
            <p id='book-content'>WEBSITE</p>
          </div>
        </div>
        </div>
        <div id="book-wrapper">
          <div className="book">
          <div id='book-content '> 
            <div id="book-content-inside">
               HELLO,<br />  This card have a small tools which is used in mobiles like 
               calculator, webcam, qr scanner, qr generator, etc..
            </div>
          </div>
          <div className="cover">
            <p id='book-content'>SMALL TOOLS</p>
          </div>
        </div>
        </div>




      </Marquee>

    </div>
  )
}

export default Projects
