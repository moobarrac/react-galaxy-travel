import React from 'react'
import {Link} from 'react-router-dom'
import spaceVideo from '../assets/space.mp4'
import '../styles/Video.css'

function Video() {
  return (
    <div className='hero'>
      <video autoPlay loop muted id="video">
        <source src={spaceVideo} type='video/mp4' />
      </video>
      <div className="content">
        <h1>Galaxy Travel</h1>
        <p>World's first civilian space ship</p>
        <div>
          <button className="btn">
            <Link to='/training'>Training</Link>
          </button>
          <button className="btn">
            <Link to='/contact'>Launch</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Video
