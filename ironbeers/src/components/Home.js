import React from 'react'
import { Link } from 'react-router-dom';


class Home extends React.Component {

  render(){
    return (
      <div>

        <div className="container">
          <div className="row">
            <div className="col-sm">
              
              <div className="card">
                <img className="card-img-top" src="https://cdn.shopify.com/s/files/1/0238/0729/files/overall_image.jpg?v=1495044184" alt="" />
                <div className="card-body">
                  <h5 className="card-title">All beers</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="/beers" className="btn btn-primary">All Beers</Link>
                </div>
              </div>
            


            </div>
            <div className="col-sm">
              
              
              <div className="card">
                <img className="card-img-top" src="https://cdn.pastemagazine.com/www/articles/2018%20beer%20long.jpg" alt="" />
                <div className="card-body">
                  <h5 className="card-title">New beer</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="/new-beer" className="btn btn-primary">New Beers</Link>
                </div>
              </div>


            </div>
            <div className="col-sm">
              
              
              <div className="card">
                <img className="card-img-top" src="http://mkebeerexchange.com/wp-content/uploads/2015/11/75e4cb_70530afefa2c4ac597c7198da59bd280-900x500.jpg" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Random beer</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="/random-beer" className="btn btn-primary">Random Beers</Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
