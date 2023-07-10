import React, { Component } from 'react'

export default class MainContent extends Component {
  render() {
    return (
      <main>
        <h1>Fun Facts about React</h1>
        <ul className='main--facts'>
            <li>We first released in 2013.</li>
            <li>We originally created by Jordan</li>
            <li>Has well over 100k stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands ...</li>
        </ul>
      </main>
    )
  }
}
