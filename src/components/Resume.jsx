import React from 'react'
import '../css/resume.css'

const Resume = () => {
  return (
    <div id='resume-body-wrapper'>
    <div id='resume-body'>
      <div id="comp1">
        <section><span className='exp-heading'>Expertise</span></section>
        <span className='year-heading'>2025 - Present</span>
        <p>Full-Stack web development</p>
        <p>Infycle technologies, chennai</p>
      </div>
      <div id="comp2">
        <div>
          <section><span className='exp-heading'>Education</span></section>
        <span className='year-heading'>2022 - 2024</span>
        <p>Bachlor of Commerce(computer Application)</p>
        <p>P.S Muthu College of arts and science, theni, TN</p>
        </div> 
        <hr />       
        <div>
        <span className='year-heading'>2020 - 2021</span>
        <p>Higher School Degree</p>
        <p>Anjuman Matric Hr. Sec. school, Ayyampet, Tanjavur.</p>
        </div>
        
      </div>
      <div id="comp3">
        <section><span className='exp-heading'>Skills</span></section>

      </div>
      <div id="comp4">
        <section><span className='exp-heading'> Languages</span></section>

      </div>
    </div>
    </div>
  )
}

export default Resume
