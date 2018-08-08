// React base
import React from 'react'

// Enzyme configuration and shallow
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// Component
import UserInput from './UserInput'

configure({adapter: new Adapter()})

describe('<UserInput />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<UserInput />)
  })

  it('<UserInput/> should hold an INPUT element', () => {
    expect(wrapper.containsAnyMatchingElements([<input></input>])).toEqual(true)
  })
})
