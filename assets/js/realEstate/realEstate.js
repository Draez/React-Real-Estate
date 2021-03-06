import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter'
import Listings from './Listings'
import listingsData from './data/listingsData';

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe',
      listingsData
    }
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter />
          <Listings listingsData={this.state.listingsData} />
        </section>
      </div>
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
