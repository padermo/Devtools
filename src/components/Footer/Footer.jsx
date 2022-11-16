import React from 'react'
import SocialNetwork from '../Socialnetwork/SocialNetwork'

function Footer() {
  return (
    <div className='container-footer'>
      <div className="container-footer-interno">
        <div>
          <label>Redes Sociales</label>
          <SocialNetwork/>
        </div>
        <div>
          <label>2022</label>
        </div>
      </div>
    </div>
  )
}

export default Footer