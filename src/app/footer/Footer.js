import React from 'react'
import './Footer.scss'
import logo from '../../img/hyundai-logo.png'

const Footer = () => (
  <footer>
    <div className="columns">
      <div className="column">
        <div className="copyright">ⓒ 2017 Dealer Messenger</div>
        <div className="footer-map">
          <a>Contact Support</a>
          <span className="dot"></span>
          <a>Dealer Messenger Academy</a>
        </div>
      </div>
      <div className="column is-narrow">
        <img className="footer-logo" src={logo} alt="Hyundai" width="200px"/>
      </div>
    </div>
  </footer>
)

export default Footer
