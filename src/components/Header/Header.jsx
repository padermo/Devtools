import React from 'react'
import Navbar from '../Navbar/Navbar'

function Header() {
  return (
    <div className='container-header'>
      <div className="container-interno-header">
        <div></div>
        <div>
          <Navbar />
        </div>
      </div>
    </div>
  )
}

export default Header