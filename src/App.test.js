import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from './App'

configure({adapter: new Adapter()})

describe('<App /> component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('renders without crashing', () => {
    expect(wrapper.find(App)).toHaveReturned
  })

  it('has initial state and change the state by click of a button', () => {
    const init = {
      users: [
        {name:"John"},
        {name:"Jake"},
        {name:"Jane"},
        {name:"Joanne"}
      ]
    }

    const expected = {
      users: [
        {name:"Andre"},
        {name:"Alex"},
        {name:"Andrew"},
        {name:"Alexa"}
      ]
    }

    expect(wrapper.state().users).toEqual(init.users)
    wrapper.find('button').simulate('click')
    expect(wrapper.state().users).toEqual(expected.users)
  })
})
