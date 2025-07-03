import React from 'react'
import '../css/about.css'
import frontend from '../assets/frontend.png'
import backend from '../assets/backend.png'
import database from '../assets/database.png'
import tools from '../assets/tools.png'

const About = () => {
  return (
    <div id='about-body'>
        <div className="grid2">
        <div className="grid-item2" id='grid-2-1-1'>
            <span className='about-heading'>Who am i</span>
            <div>
                <span className='about-sub-heading'>A Beginer fullstack developer</span>
            <p>Hi, I'm ijaz, a beginner full-stack developer with a passion for coding and problem-solving.
                 I'm currently learning and exploring various technologies, including Python, 
                 to build a strong foundation in web development</p>
                </div>
        </div>
        <div className="grid-item2" id='grid-2-1-2'>
           <span className='about-heading'> Personal info</span>
           <div>
            <p><b>Birthdate :</b> 22/07/2004</p>
            <p><b>Email :</b> ijazmohamed723@gmail.com</p>
            <p><b>Phone :</b> + (91) 8754-750-458</p>
            <p><b>Skype :</b> Mohamed Ijaz</p>
            <p><b>Address :</b> no.4 indra nagar, tindivanam, 604001.</p>            
           </div>

        </div>
        <div className="grid-item2" id='grid-2-1-3'>
           <span className='about-heading'> My Expertise</span>
           <div> 
            <section className='expsection'>
                <img src={frontend} alt="" width={"35px"} height={"30px"} />
                <div>
                <p>frontend</p>
                <span>html, css, javascript, reactjs</span>
                </div>
            </section>

            <section className='expsection'>
                <img src={backend} alt="" width={"35px"}   height={"30px"} />
                <div>
                <p>backend</p>
                    <span>python, javascript, nodejs, express</span>
                </div>
            </section>

            <section className='expsection'>
                <img src={database} alt="" width={"35px"}  height={"30px"}  />
                <div>
                <p>database</p>
                <span>oracle-db, mongo-db, my-sql</span>
                </div>
            </section>

            <section className='expsection' id='lastexpesection'>
                <img src={tools} alt="" width={"35px"}  height={"30px"}  />
                <div>
                <p>tools</p>
                <span>git, github</span>
                </div>
            </section>

           </div>
        </div>
        </div>
    </div>
  )
}

export default About
