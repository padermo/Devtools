import React, { useState, useEffect } from 'react';

function Resources() {
  const Data = [
    {
      id: "1R",
      name: "Google Fonts",
      url: "https://fonts.google.com/"
    },
    {
      id: "2R",
      name: "Adobe Color",
      url: "https://color.adobe.com/es/create/color-wheel"
    },
    {
      id: "3R",
      name: "Fontawesome",
      url: "https://fontawesome.com/"
    },
    {
      id: "4R",
      name: "Hexcolor",
      url: "https://hexcolor.co/generate-color-gradient"
    },
    {
      id: "5R",
      name: "Bootstrap",
      url: "https://getbootstrap.com/"
    },
    {
      id: "6R",
      name: "CSS generator",
      url: "https://cssgenerator.org/"
    },
    {
      id: "7R",
      name: "Flaticon",
      url: "https://www.flaticon.com/free-icons/css"
    },
    {
      id: "8R",
      name: "CSS.gg",
      url: "https://css.gg/"
    },
    {
      id: "9R",
      name: "Pexels",
      url: "https://www.pexels.com/es-es/"
    },
    {
      id: "10R",
      name: "CSS matic",
      url: "https://www.cssmatic.com/"
    },
    {
      id: "11R",
      name: "Color Code",
      url: "https://htmlcolorcodes.com/es/nombres-de-los-colores/"
    },
    {
      id: "12R",
      name: "Specificity",
      url: "https://specificity.keegan.st/"
    }
  ];

  const [viewData, setViewData] = useState();

  useEffect(() => {
    setViewData(
      Data.map(e => (
        <div key={e.id} className='view-data'>
          <h3>{e.name}</h3>
          <a href={e.url} target='_blank' rel='noreferrer'>Ir a pagina.</a>
        </div>
      ))
    )
  },[])

  return (
    <div className='container-info'>
      <div className="container-info-interno">
        {viewData}
      </div>
    </div>
  )
}

export default Resources