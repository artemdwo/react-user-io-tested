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

  it('Left column has initial state and changes the state by click of the left button', () => {
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
        {name:"Batman"},
        {name:"Alex"},
        {name:"Andrew"},
        {name:"Alexa"}
      ]
    }

    expect(wrapper.state().users).toEqual(init.users)
    wrapper.find('button').at(0).simulate('click')
    expect(wrapper.state().users).toEqual(expected.users)
  })

  it('Right button should be hidden', () => {
    expect(wrapper.find('button').at(1).prop('style').visibility).toBe('hidden')
  })
})
