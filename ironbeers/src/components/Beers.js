import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';



class Beers extends React.Component {
  constructor(){
    super()
    this.state ={
      beersData: []

    }
  }

  componentDidMount() {
    axios.get("https://ih-beer-api.herokuapp.com/beers")
    .then(response => {
      this.setState({beersData: response.data})
    })
  }

  render(){

    return (
      <div>
        {this.state.beersData.map(element =>       
        <div key={element._id} className="beercard card flex-row flex-wrap mb-3">
          <div className="card-header border-0">
              <img src={element.image_url} className="image-list" alt="" />
          </div>
          <div className="beercard card-block px-2">
              <Link to={`/beers/${element._id}`} className="card-title stretched-link">{element.name}</Link>
              <p className="card-text">{element.tagline}</p>
              <p className="card-text">Created by: {element.contributed_by}</p>
          </div>
        </div>)}

 

      </div>
    )
  }
}

export default Beers
