import React from 'react'
import axios from 'axios';


class BeerDetails extends React.Component {
  constructor(){
    super()
    this.state ={
      beersData: []

    }
  }

  componentDidMount() {
    axios.get(`https://ih-beer-api.herokuapp.com/beers/${this.props.match.params.beerId}`)
    .then(response => {
      this.setState({beersData: response.data})
    })
  }

  render(){
    console.log(`https://ih-beer-api.herokuapp.com/beers/${this.props.match.params.beerId}`)
    return (

        <div className="p-3 card">
          <img className="image-details card-img-top" src={this.state.beersData.image_url} alt="" />
          <div className="card-body">
            <h5 className="card-title">{this.state.beersData.name}</h5>
            <p className="card-text text-muted">{this.state.beersData.tagline}</p>
            <p className="card-text">{this.state.beersData.description}</p>
            <p className="card-text"><small>{this.state.beersData.contributed_by}</small></p>
          </div>
        </div>

    )
  }
}

export default BeerDetails
