import React, { Component } from 'react'
import Header from './header/Header'
import Campaigns from './campaigns/Campaigns'
import Feeds from './feed/Feeds'
import Footer from './footer/Footer'

import './App.scss'

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <div className="columns">
          <div className="column page">
            <Campaigns/>

            <Footer/>
          </div>
          <div className="column is-narrow right-side">
            <Feeds/>
          </div>
        </div>
      </div>
    )
  }

}

export default App
