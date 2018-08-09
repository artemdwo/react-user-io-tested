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
    ],
    newUsers: [
      {name:"Kate"},
      {name:"Kane"},
      {name:"Keith"},
      {name:"Kurt"}
    ]
  }

  changeNameHandler = (newFirstName) => {
    this.setState({
      users:[
        {name: newFirstName},
        {name: "Alex"},
        {name: "Andrew"},
        {name: "Alexa"}
      ]
    })
  }

  changedAllNamesHandler = (event) => {
    this.setState({
      users:[
        {name: event.target.value},
        {name: event.target.value},
        {name: event.target.value},
        {name: event.target.value}
      ]
    })
  }
  
  changedFirstNameHandler = (event) => {
    this.setState({
      newUsers:[
        {name: event.target.value},
        {name: "Kane"},
        {name: "Keith"},
        {name: "Kurt"}
      ]
    })
  }

  render () {
    const style = {
      display: 'inline-block',
      margin: '1 auto',
      width: '50%'
    }

    return (
      <div className="App">
        <h1>A User I\O React application.</h1>
        <hr/>
        <div style={style}>
          <UserInput changedNameRef={this.changedAllNamesHandler}>
            Change all names in one go by typing here:
          </UserInput>
          <div>
            <button onClick={this.changeNameHandler.bind(this, 'Batman')}>Click here for magic to happen!</button>
          </div>
          <UserOutput userName={this.state.users[0].name}/>
          <UserOutput userName={this.state.users[1].name}/>
          <UserOutput userName={this.state.users[2].name}/>
          <UserOutput userName={this.state.users[3].name}/>
        </div>
        <div style={style}>
          <UserInput 
            changedNameRef={this.changedFirstNameHandler}
            userName={this.state.newUsers[0].name}>
            Change first name by typing here:
          </UserInput>
          <div>
            <button style={{visibility: 'hidden'}} onClick={this.changeNameHandler}>Click here for magic to happen!</button>
          </div>
          <UserOutput userName={this.state.newUsers[0].name}/>
          <UserOutput userName={this.state.newUsers[1].name}/>
          <UserOutput userName={this.state.newUsers[2].name}/>
          <UserOutput userName={this.state.newUsers[3].name}/>
        </div>
      </div>
    )
  }
}

export default App
