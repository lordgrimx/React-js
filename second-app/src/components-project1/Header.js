import React, { Component } from 'react'
import logo from './logo192.png'

export default class Header extends Component {
  render() {
    return (
      <nav>
            <img className='img-css' src={logo} alt='Image not found.'/>
            <h2 className='left-side-navbar'>ReactFacts</h2>
            <h3 className='right-side-navbar'>React Course-Project 1</h3>
      </nav>
    )
  }
}
