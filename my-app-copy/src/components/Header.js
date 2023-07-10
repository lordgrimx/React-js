import React, { Component } from 'react'
import logo from "./logo192.png"

class Header extends Component {
  render() {
    return (
      <header className="header-css">
      <nav className="navbar-container">
      <img className="img-css" src={logo} alt="" />
        <ol className="navbar">
          <li className="navbar-item">Pricing</li>
          <li className="navbar-item">About</li>
          <li className="navbar-item">Contact</li>
        </ol>
      </nav>
    </header>
    )
  }
}

export default Header;