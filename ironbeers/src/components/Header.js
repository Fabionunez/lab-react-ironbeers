
import React from 'react'
import { Link } from 'react-router-dom';




class Beers extends React.Component {

  render(){
    return (
      <nav className="navbar navbar-dark bg-primary mb-4">
          <h1 className="text-white"><Link to="/" className="text-white">Ironbeers</Link></h1>
      </nav>
    )
  }
}

export default Beers


