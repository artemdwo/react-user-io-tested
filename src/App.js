import React, { Component } from 'react'

// styling
import './App.css'

// components
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

// Root component
class App extends Component {
  render () {
    return (
      <div className="App">
        <h1>A User I\O React application.</h1>
        <hr/>
        <UserInput/>
        <UserOutput userName='John'/>
        <UserOutput userName='Jake'/>
        <UserOutput userName='Jane'/>
        <UserOutput userName='Joanne'/>
      </div>
    )
  }
}

export default App
