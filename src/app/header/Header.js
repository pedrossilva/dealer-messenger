import React, { Component } from 'react'
import './Header.scss'

import logo from '../../img/hyundai-logo.png'
import avatar from '../../img/avatar.jpg'

class Header extends Component {

  render() {
    return (
      <header>

        <nav className="navbar">
          <div className="navbar-brand">
            <a className="navbar-item" href="javascript:;">
              <img src={logo} alt="Hyundai" width="200px"/>
              <span className="brand-label">Dealer Messenger</span>
            </a>
            <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-start navbar-custom">
              <a className="navbar-item" href="javascript:;">
                Campaingns
              </a>
              <a className="navbar-item" href="javascript:;">
                Customers
              </a>
              <a className="navbar-item" href="javascript:;">
                Reports
              </a>
            </div>

            <div className="navbar-end navbar-custom">
              <a className="navbar-item nav-icon">
                <i className="far fa-bell"></i>
              </a>
              <div className="navbar-item person">
                <img src={avatar} alt="avatar" className="avatar"/>
                <div className="person-description">
                  <strong>Birdie Williams</strong><br/>
                  <span>Selling Specialist</span>
                </div>
              </div>


              <div className="navbar-item has-dropdown is-hoverable dropdown-custom">
                <a className="navbar-link no-pseudo" href="/documentation/overview/start/">
                  ...
                </a>
                <div className="navbar-dropdown is-boxed">
                  <a className="navbar-item" href="/documentation/overview/start/">
                    Overview
                  </a>
                  <a className="navbar-item" href="javascript:;">
                    Modifiers
                  </a>
                  <a className="navbar-item" href="javascript:;">
                    Columns
                  </a>
                  <a className="navbar-item" href="javascript:;">
                    Layout
                  </a>
                  <a className="navbar-item" href="javascript:;">
                    Form
                  </a>
                  <hr className="navbar-divider"/>
                    <a className="navbar-item" href="javascript:;">
                      Elements
                    </a>
                    <a className="navbar-item is-active" href="javascript:;">
                      Components
                    </a>
                </div>
              </div>




            </div>
          </div>
        </nav>


        <nav className="navbar subnav">
          <a className="navbar-item" href="javascript:;">
            Sent Campaingns
          </a>
          <a className="navbar-item" href="javascript:;">
            Drafts
          </a>
          <a className="navbar-item" href="javascript:;">
            Templates
          </a>
          <div className="navbar-end">
            <div className="navbar-item">
              <a className="button is-primary">
                <span className="circle-icon"><i className="fa fa-plus"></i></span>
                Create Campaign
              </a>
            </div>
          </div>
        </nav>


      </header>
    )
  }

}

export default Header
