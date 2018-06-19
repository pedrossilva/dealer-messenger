import React, { Component } from 'react'
import './Header.scss'

import logo from '../../img/hyundai-logo.png'
import avatar from '../../img/avatar.jpg'

class Header extends Component {

  render() {
    return (
      <header>
        {/*<div className="columns">*/}
          {/*<div className="brand column">*/}
            {/*Dealer Messenger*/}
          {/*</div>*/}
          {/*<nav className="column is-half">*/}
            {/*<ul>*/}
              {/*<ul className="columns">*/}
                {/*<li className="column is-narrow">Campaingns</li>*/}
                {/*<li className="column is-narrow">Customers</li>*/}
                {/*<li className="column is-narrow">Reports</li>*/}
              {/*</ul>*/}
            {/*</ul>*/}

          {/*</nav>*/}
          {/*<div className="column"></div>*/}
        {/*</div>*/}


        <nav className="navbar">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src={logo} alt="Bulma: a modern CSS framework based on Flexbox" width="200px"/>
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
              <a className="navbar-item" href="https://bulma.io/">
                Campaingns
              </a>
              <a className="navbar-item" href="https://bulma.io/">
                Customers
              </a>
              <a className="navbar-item" href="https://bulma.io/">
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
                  <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                    Modifiers
                  </a>
                  <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                    Columns
                  </a>
                  <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
                    Layout
                  </a>
                  <a className="navbar-item" href="https://bulma.io/documentation/form/general/">
                    Form
                  </a>
                  <hr className="navbar-divider"/>
                    <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">
                      Elements
                    </a>
                    <a className="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                      Components
                    </a>
                </div>
              </div>




            </div>
          </div>
        </nav>

      </header>
    )
  }

}

export default Header
