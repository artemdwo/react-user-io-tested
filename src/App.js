import React, { Component } from 'react'

// styling
import './App.css'

// components
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

// Root component
class App extends Component {

  state = {
    users: [
      {name:"John"},
      {name:"Jake"},
      {name:"Jane"},
      {name:"Joanne"}
    ]
  }

  changeNameHandler = () => {
    this.setState({
      users:[
        {name:"Andre"},
        {name:"Alex"},
        {name:"Andrew"},
        {name:"Alexa"}
      ]
    })
  }

  render () {
    return (
      <div className="App">
        <h1>A User I\O React application.</h1>
        <hr/>
        <UserInput/>
        <button onClick={this.changeNameHandler}>Click here for magic to happen!</button>
        <UserOutput userName={this.state.users[0].name}/>
        <UserOutput userName={this.state.users[1].name}/>
        <UserOutput userName={this.state.users[2].name}/>
        <UserOutput userName={this.state.users[3].name}/>
      </div>
    )
  }
}

export default App
