import React, {useEffect, useState} from 'react'

function Document() {
  const Data = [
    {
      id: "1D",
      name: "Mozilla Developer Network",
      url: "https://developer.mozilla.org/en-US/"
    },
    {
      id: "2D",
      name: "W3schools",
      url: "https://www.w3schools.com/default.asp"
    },
    {
      id: "3D",
      name: "React JS",
      url: "https://reactjs.org/"
    },
    {
      id: "4D",
      name: "Sequelize",
      url: "https://sequelize.org/docs/v6/"
    },
    {
      id: "5D",
      name: "Npm",
      url: "https://www.npmjs.com/"
    },
    {
      id: "6D",
      name: "Node JS",
      url: "https://nodejs.org/en/docs/"
    }
  ];
  const [viewData, setViewData] = useState();

  useEffect(() => {
    setViewData(
      Data.map(e => (
        <div key={e.id} className='view-data'>
          <h3>{e.name}</h3>
          <a href={e.url}>Ir a pagina.</a>
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

export default Document