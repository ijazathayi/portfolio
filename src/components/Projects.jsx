import React from 'react'
import '../css/projects.css'
import Marquee from "react-fast-marquee";
 import { useNavigate } from 'react-router';

const Projects = () => {
  
 let navigate = useNavigate()

  return (
    <div id='project-body'>
      
      <span id='pro-int-1' >MY </span>
      <span id='pro-int'>Projects</span>
      <Marquee>
        <div id="book-wrapper"><button className="book">
          <p id='book-content'>Hello </p>
          <div className="cover">
            <p id='book-content'>LOGIN-1</p>
          </div>
        </button>
        </div>

        <div id="book-wrapper"><button className="book">
          <p id='book-content'>Hello</p>
          <div className="cover">
            <p id='book-content'>LOGIN-2</p>
          </div>
        </button>
        </div>
        <div id="book-wrapper"><button className="book">
          <p id='book-content'>Hello</p>
          <div className="cover">
            <p id='book-content'>STREAM TUNES</p>
          </div>
        </button>
        </div>
        <div id="book-wrapper"><button className="book">
          <p id='book-content'>Hello</p>
          <div className="cover">
            <p id='book-content'>PIANO</p>
          </div>
        </button>
        </div>
        <div id="book-wrapper"><a href="https://ijaz.free.nf/"><button 
        // onClick={() => {navigate("https://ijaz.free.nf/");}} 
        
        
        className="book">
          <p id='book-content'>Hello</p>
          <div className="cover">
            <p id='book-content'>WEBSITE</p>
          </div>
        </button></a>
        </div>
        <div id="book-wrapper">
          <button  className="book">
          <div id='book-content '> 
            <div id="book-content-inside">
               HELLO,<br />  This card have a small tools which is used in mobiles like 
               calculator, webcam, qr scanner, qr generator, etc..
            </div>
          </div>
          <div className="cover">
            <p id='book-content'>SMALL TOOLS</p>
          </div>
        </button>
        </div>




      </Marquee>

    </div>
  )
}

export default Projects
