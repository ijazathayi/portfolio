import React from "react";
import "../styles.css";
import Four from "./Four";
import './css/three.css'
import {Link} from "react-router-dom";



const Three = () => {
  return (
    <div className="section " id="projects">
      <div className="three">
      <span id="three-head">PROJECTS</span> 
      <div id="three-carousel" className="three-carousel">
        <Link to="/calculator"  className='link-tools'>Calculator</Link>
        <Link to="/agecalc" className='link-tools'>age calculator</Link>
        <Link  className='link-tools'>Comming soon</Link>
        <Link  className='link-tools'>Comming soon</Link>
        <Link  className='link-tools'>Comming soon</Link>
        <Link  className='link-tools'>Comming soon</Link>
        <Link  className='link-tools'>Comming soon</Link>
        <Link  className='link-tools'>Comming soon</Link>
        <Link  className='link-tools'>Comming soon</Link>
        <Link  className='link-tools'>Comming soon</Link>
        <Link  className='link-tools'>Comming soon</Link>
        <Link  className='link-tools'>Comming soon</Link>
        <Link  className='link-tools'>Comming soon</Link>
        <Link  className='link-tools'>Comming soon</Link>
        <Link  className='link-tools'>Comming soon</Link>
        <Link  className='link-tools'>Comming soon</Link>

      </div>
    </div>
    <Four />
    </div>
  );
};

export default Three;
