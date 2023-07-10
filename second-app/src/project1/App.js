import React, { Component } from 'react'
import Header from '../components-project1/Header.js'
import Footer from '../components-project1/Footer.js'
import MainContent from '../components-project1/MainContent.js'
import "./index.css"


class App extends Component {
  render() {
    return (
    <div className='container'>
      <Header />
      <Footer />
      <MainContent />
    </div>
    )
  }
}


export default App;
