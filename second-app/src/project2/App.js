import React, { Component } from 'react'
import Header from 'C:/Users/alperen/Desktop/Web Developer/React Js/second-app/src/components-project2/Header.js';
import MainContent from 'C:/Users/alperen/Desktop/Web Developer/React Js/second-app/src/components-project2/MainContent.js';
import Footer from 'C:/Users/alperen/Desktop/Web Developer/React Js/second-app/src/components-project2/Footer.js';


class App extends Component {
  render() {
    return (
    <div className='app--container'>
      <Header />
      <MainContent />
      <Footer />
    </div>
    )
  }
}

export default App;