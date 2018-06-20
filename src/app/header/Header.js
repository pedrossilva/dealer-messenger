import React, { Component } from 'react'
import './Header.scss'


import avatar from '../../img/avatar.jpg'

import { Brand, PersonMenu } from './MenuParts'



class Header extends Component {

  constructor() {
    super()
    this.state = {
      showMenu: false
    }
  }

  render() {

    const showMenu = () => {
      this.setState({showMenu: !this.state.showMenu})
    }

    const menuClass = ['navbar-menu', (this.state.showMenu ? 'is-active': null)].join(' ')

    return (
      <header>


        <nav className="navbar" role="navigation" aria-label="main navigation">
          <Brand showMenu={showMenu}/>

          <div className={menuClass}>
            <div className="navbar-end navbar-main">
              <a className="navbar-item">Campaigns</a>
              <a className="navbar-item">Customers</a>
              <a className="navbar-item">Reports</a>

              <a className="navbar-item nav-icon divider-left">
                <i className="far fa-bell"></i>
              </a>
              <div className="navbar-item person divider-left">
                <img src={avatar} alt="avatar" className="avatar"/>
                <div className="person-description">
                  <strong>Birdie Williams</strong><br/>
                  <span>Selling Specialist</span>
                </div>
              </div>

              <PersonMenu/>

            </div>
          </div>
        </nav>

        <nav className="navbar navbar-white" role="navigation" aria-label="main navigation">
          <div className={menuClass}>
            <div className="navbar-start navbar-main">
              <a className="navbar-item">Sent Campaigns</a>
              <a className="navbar-item">Drafts</a>
              <a className="navbar-item">Templates</a>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <a className="button is-primary">
                  <span className="circle-icon"><i className="fa fa-plus"></i></span>
                  Create Campaign
                </a>
              </div>
            </div>
          </div>
        </nav>


      </header>
    )
  }

}

export default Header
