import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='container-navbar'>
      <div className="container-interno-navbar">
        <Link to={'/'} className='link'>
          <label><span>A</span>bout</label>
        </Link>
        <Link to={'/documents'} className='link'>
          <label><span>D</span>ocument</label>
        </Link>
        <Link to={'/resources'} className='link'>
          <label><span>R</span>esources</label>
        </Link>
      </div>
    </div>
  )
}

export default Navbar