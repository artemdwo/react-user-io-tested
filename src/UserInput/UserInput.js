// React base
import React from 'react'

// styling
import './UserInput.css'

// userInput component main render
const userInput = (prpts) => {
  return (
    <div className="UserInput">
      {prpts.children}
      <p/>
      <input type="text" onChange={prpts.changedNameRef} value={prpts.userName} />
      <hr/>
    </div>
  )
}

export default userInput
