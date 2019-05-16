import React from 'react'
import axios from 'axios';



class RandomBeer extends React.Component {
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
        RandomBeer
      </div>
    )
  }
}

export default RandomBeer
