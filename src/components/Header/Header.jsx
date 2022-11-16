import React from 'react'
import Navbar from '../Navbar/Navbar'

function Header() {
  return (
    <div className='container-header'>
      <div className="container-header-interno">
        <div className='container-header-img'>

        </div>
        <div className='container-header-navbar'>
          <Navbar />
        </div>
      </div>
    </div>
  )
}

export default Header