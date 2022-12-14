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
      name: "CSS Generator",
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
      name: "CSS Matic",
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
    },
    {
      id: "13R",
      name: "Unsplash",
      url: "https://unsplash.com/es"
    },
    {
      id: "14R",
      name: "Canva Generator",
      url: "https://www.canva.com/colors/color-palette-generator/"
    },
    {
      id: "15R",
      name: "Remove Bg",
      url: "https://www.remove.bg/es"
    },
    {
      id: "16R",
      name: "Toptal",
      url: "https://www.toptal.com/designers/subtlepatterns/"
    },
    {
      id: "17R",
      name: "Flatiucolors",
      url: "https://flatuicolors.com/"
    },
    {
      id: "18R",
      name: "Boxicons",
      url: "https://boxicons.com/"
    },
    {
      id: "19R",
      name: "Webgradients",
      url: "https://webgradients.com/"
    },
    {
      id: "20R",
      name: "Smooth",
      url: "https://smooth.ie/blogs/news/svg-wavey-transitions-between-sections"
    },
    {
      id: "21R",
      name: "Can I Use",
      url: "https://caniuse.com/"
    },
    {
      id: "22R",
      name: "Undraw",
      url: "https://undraw.co/illustrations"
    },
    {
      id: "23R",
      name: "Normalize.css",
      url: "https://necolas.github.io/normalize.css/"
    },
    {
      id: "24R",
      name: "SVGporn",
      url: "https://svgporn.com/"
    },
    {
      id: "25R",
      name: "Clippy",
      url: "https://bennettfeely.com/clippy/"
    },
    {
      id: "26R",
      name: "Cubic Bezier",
      url: "https://cubic-bezier.com/#0,0,1,1"
    },
    {
      id: "27R",
      name: "Magic Pattern",
      url: "https://www.magicpattern.design/tools/css-backgrounds"
    },
    {
      id: "28R",
      name: "CSS Gradient",
      url: "https://cssgradient.io/"
    },
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
