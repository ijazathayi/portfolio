import React from 'react'
import { Link, NavLink } from 'react-router'
import '../css/navbar.css'

const Navbar = () => {
  return (
    <div id='navbar-body'>
      <nav>
        <ul>
            <li><NavLink to='/'> Home</NavLink></li>
            <li><NavLink to={'/about'}>about</NavLink></li>
            <li><NavLink to={'/resume'}>resume </NavLink></li>
            <li><NavLink to={'/projects'}>projects </NavLink></li>
            <li><NavLink to={'/contact'}>contact </NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
