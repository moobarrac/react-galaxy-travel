import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import '../styles/navbar.css'

function Navbar() {
  const [showBar, setShowBar] = useState(false)
  return (
    <div className='navbar'>
      <Link to="/"><h1>GALAXY TRAVEL</h1></Link>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/training">Training</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className={`navbar-small ${showBar? 'show' : 'hide'}`}>
        <button className="close" onClick={() => setShowBar(!showBar)}>
          <FaTimes/>
        </button>
        <Link to="/" onClick={() => setShowBar(false)} >Home</Link>
        <Link to="/pricing" onClick={() => setShowBar(false)} >Pricing</Link>
        <Link to="/training" onClick={() => setShowBar(false)}>Training</Link>
        <Link to="/contact" onClick={() => setShowBar(false)}>Contact</Link>
      </div>
      <button className='navbar-btn' onClick={() => setShowBar(!showBar)}>
        <FaBars/>
      </button>
    </div>
  )
}

export default Navbar
