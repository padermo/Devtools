import React, { useEffect, useState } from 'react';
import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'

function SocialNetwork() {
  let images = [
    {
      name: "GitHub",
      img: github,
      url: "https://github.com/padermo"
    },
    {
      name: "Instagram",
      img: instagram,
      url: "https://www.instagram.com/padermoo/"
    },
    {
      name: "LinkedIn",
      img: linkedin,
      url: "https://www.linkedin.com/in/fabio-andres-estevez-herrera/"
    }
  ];

  const [viewData, setViewData] = useState();

  useEffect(() => {
    setViewData(
      images.map(e => (
        <div key={e.name} className='container-socialnetwork-interno'>
          <a href={e.url}>
            <label>{e.name}</label>
            <img src={e.img} alt={`Imagen de ${e.name}`} />
          </a>
        </div>
      ))
    )
  },[])

  return (
    <div className='container-socialnetwork'>
      {viewData}
    </div>
  )
}

export default SocialNetwork