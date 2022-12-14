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
    },
    {
      id: "7D",
      name: "Express",
      url: "https://expressjs.com/"
    },
    {
      id: "8D",
      name: "MySQL",
      url: "https://dev.mysql.com/doc/"
    },
    {
      id: "9D",
      name: "PostgreSQL",
      url: "https://www.postgresql.org/docs/"
    },
    {
      id: "10D",
      name: "Git",
      url: "https://git-scm.com/docs"
    },
    {
      id: "11D",
      name: "Sass",
      url: "https://sass-lang.com/documentation/"
    },
    {
      id: "12D",
      name: "CSS Tricks",
      url: "https://css-tricks.com/guides/"
    },
    {
      id: "13D",
      name: "React Router",
      url: "https://reactrouter.com/en/main"
    },
    {
      id: "14D",
      name: "CSS Reference",
      url: "https://cssreference.io/"
    },
    {
      id: "15D",
      name: "CSS Triggers",
      url: "https://csstriggers.com/"
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

export default Document
