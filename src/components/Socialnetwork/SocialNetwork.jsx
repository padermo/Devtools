import React, {useEffect, useState} from 'react'

function SocialNetwork({name}) {
  return (
    <div className='container-socialnetwork'>
      <label>{name}</label>
      <img src="" alt={`Imagen de ${name}`} />
    </div>
  )
}

export default SocialNetwork