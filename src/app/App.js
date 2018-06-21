import React, { Component } from 'react'
import Header from './header/Header'
import Campaigns from './campaigns/Campaigns'
import Feed from './feed/Feed'

import './App.scss'

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <div className="columns">
          <div className="column page">
            <Campaigns/>
          </div>
          <div className="column is-narrow right-side">
            <Feed/>
          </div>
        </div>
      </div>
    )
  }

}

export default App
