import React from 'react'
import SocialNetwork from '../Socialnetwork/SocialNetwork'

function Footer() {
  return (
    <div className='container-footer'>
      <div className="container-interno-footer">
        <div>
          <label>Redes Sociales</label>
          <div>
            <SocialNetwork name={'linkedin'} />
            <SocialNetwork name={'github'} />
            <SocialNetwork name={'instagram'} />
          </div>
        </div>
        <div>
          <label>2022</label>
        </div>
      </div>
    </div>
  )
}

export default Footer