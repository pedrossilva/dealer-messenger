import React  from 'react'

import logo from '../../img/hyundai-logo.png'

export const Burger = ({showMenu}) => (
  <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" onClick={showMenu}>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>
)

export const Brand = ({showMenu}) => {
  return (
    <div className="navbar-brand">
      <a className="navbar-item" href="javascript:;">
        <img src={logo} alt="Hyundai" width="200px"/>
        <span className="brand-label">Dealer Messenger</span>
      </a>
      <Burger showMenu={showMenu}/>
    </div>
  )
}

export const PersonMenu = () => (
  <div className="navbar-item has-dropdown">
    <a className="navbar-link">
      ...
    </a>

    <div className="navbar-dropdown">
      <a className="navbar-item">Perfil</a>
    </div>
  </div>
)